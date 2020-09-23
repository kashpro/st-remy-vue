const messages = {
  YOUNG_ACCESS_DENIED_MESSAGE: {
    head: "",
    text: "Вход разрешен только совершеннолетним",
  },
};

export default {
  install(Vue) {
    Vue.prototype.$messages = messages;
  },
}