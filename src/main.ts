import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import DaySpan from 'dayspan-vuetify-2'
import VueCompositionApi from '@vue/composition-api'



Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(DaySpan, {
  methods: {
      getDefaultEventColor: () => '#1976d2'
  }
});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
