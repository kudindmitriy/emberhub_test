import Vue from 'vue'
import store from './store'
import App from './App.vue'
import ProgressBar from 'vuejs-progress-bar'
import '@/assets/styles/app.css'

Vue.use(ProgressBar)
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
