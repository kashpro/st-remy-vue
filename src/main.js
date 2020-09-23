/* Стили */
import "@/scss/main.scss";

/* Vue */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Utils */
import development from '@/utils/development.util.js';
development.addWindowStatsElement();
import messagePlugin from '@/utils/messages.util.js';
Vue.use(messagePlugin);

/* Global components */
import Button from "@/components/Button.vue";
Vue.component("Button", Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
