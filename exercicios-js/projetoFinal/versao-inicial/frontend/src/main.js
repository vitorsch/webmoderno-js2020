import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'
import App from './App'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlZpdG9yIEEuIFNjaG5laWRlciIsImVtYWlsIjoidml0b3JzY2hAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYxMjMxMjcwNiwiZXhwIjoxNjEyNTcxOTA2fQ.H7tGM_Hj76W9YYxAvTeeRl8QfPdk4XDzzpGm-BSnCeQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')