import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import wxApolloFetcher from 'wx-apollo-fetcher'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { WxWebsocket } from './wx-websocket.js'
import { typeDefs, resolvers } from './resolvers.js'

const httpLink = createHttpLink({
	uri: "http://localhost:8080/query",
	fetch: wxApolloFetcher,
})

// console.log(WxWebsocket)

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
	typeDefs,
	resolvers
})

cache.writeData({
	data: {
		// isLogin: true,
		// somepost: [
		// 	{
		// 		__typename: "post",
		// 		id: "1",
		// 		score: 11,
		// 	},
		// 	{
		// 		__typename: "post",
		// 		id: "2",
		// 		score: 22,
		// 	}
		// ]
	}
})

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

module.exports = {
	apolloProvider
}