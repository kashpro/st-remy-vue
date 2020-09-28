/* Styles */
import "normalize.css/normalize.css";
import "@/scss/fonts.scss";
import "@/scss/global.scss";
import "slick-carousel/slick/slick.scss";

/* Vue */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

/* Utils & Plugins */
import development from '@/utils/development.util.js';
development.addWindowStatsElement();
import messagePlugin from '@/utils/messages.util.js';
Vue.use(messagePlugin);

/* Global components */
import Button from "@/components/global/Button.vue";
import ModalInput from "@/components/global/ModalInput.vue";
import ModalHead from "@/components/global/ModalHead.vue";
import ModalForm from "@/components/global/ModalForm.vue";
// import ModalSocial from "@/components/global/ModalSocial.vue";
import ModalLink from "@/components/global/ModalLink.vue";
import SocialLink from "@/components/global/SocialLink.vue";
Vue.component("ModalInput", ModalInput);
Vue.component("ModalHead", ModalHead);
Vue.component("ModalForm", ModalForm);
// Vue.component("ModalSocial", ModalSocial);
Vue.component("ModalLink", ModalLink);
Vue.component("SocialLink", SocialLink);
Vue.component("Button", Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
