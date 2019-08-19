import Vue from 'vue'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import add from './pages/add/home.vue'
Vue.component('add', add)

import my from './pages/my/home.vue'
Vue.component('my', my)

import news from './pages/news/home.vue'
Vue.component('news', news)

import square from './pages/square/home.vue'
Vue.component('square', square)

import store from './pages/store/home.vue'
Vue.component('store', store)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



