import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './registerServiceWorker'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.use(Antd);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
