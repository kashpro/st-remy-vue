/* Styles */
import "normalize.css/normalize.css";
import "@/scss/fonts.scss";
import "@/scss/vars.scss";
import "@/scss/global.scss";
import "@/scss/pagination.scss";
import "slick-carousel/slick/slick.scss";

/* Vue */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Utils & Plugins */
import development from '@/utils/development.util.js';
if (process.env.NODE_ENV === "production") {development.addWindowStatsElement();}
import messagePlugin from '@/utils/messages.util.js';
Vue.use(messagePlugin);
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate);
import VueMeta from "vue-meta";
Vue.use(VueMeta);
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

/* Global components */
import Button from "@/components/global/Button.vue";
Vue.component("Button", Button);
import ModalInput from "@/components/global/ModalInput.vue";
Vue.component("ModalInput", ModalInput);
import ModalHead from "@/components/global/ModalHead.vue";
Vue.component("ModalHead", ModalHead);
import ModalForm from "@/components/global/ModalForm.vue";
Vue.component("ModalForm", ModalForm);
import ModalLink from "@/components/global/ModalLink.vue";
Vue.component("ModalLink", ModalLink);
import SocialLink from "@/components/global/SocialLink.vue";
Vue.component("SocialLink", SocialLink);
// import ModalSocial from "@/components/global/ModalSocial.vue";
// Vue.component("ModalSocial", ModalSocial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
