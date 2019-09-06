import Vue from 'vue'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import wxApolloFetcher from 'wx-apollo-fetcher'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { WxWebsocket } from 'wx-websocket.js'

Vue.component('cu-custom',cuCustom)


// import add from './pages/add/home.vue'
// Vue.component('add', add)
// 
// import my from './pages/my/home.vue'
// Vue.component('my', my)
// 
// import news from './pages/news/home.vue'
// Vue.component('news', news)
// 
// import square from './pages/square/home.vue'
// Vue.component('square', square)
// 
// import store from './pages/store/home.vue'
// Vue.component('store', store)

Vue.config.productionTip = false

App.mpType = 'app'

const httpLink = createHttpLink({
	uri: "http://localhost:8080/query",
	fetch: wxApolloFetcher,
})

console.log(WxWebsocket)

const wsLink = new WebSocketLink({
	uri: "ws://localhost:8080/query",
	options: {
		reconnect: true,
	},
	webSocketImpl: WxWebsocket,
})

const link = split(
  // 根据操作类型分割
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
	link: link,
	cache,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

Vue.prototype.$apolloProvider = apolloProvider

const app = new Vue({
    ...App,
	apolloProvider,
})
app.$mount()

 



