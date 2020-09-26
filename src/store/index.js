import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.js';
import modal from './modal.js';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editorStory: {
      desc: "",
      beforeImage: null,
      afterImage: null,
      beforeYear: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
      afterYear: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
    },
  },
  mutations: {
  },
  actions: {
    sendFeedback: async (_, data) => {
      try {
        let response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_FEEDBACK_API}`, data, {timeout: 10000});
        return response;
      } catch(err) {
        throw err;
      }
    },
    sendHistory: async (_, data) => {
      try {
        console.log(data);
        let response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_CREATE_HISTORY}`, data, {
          timeout: 10000,
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        return response;
      } catch(err) {
        throw err;
      }
    },

  },
  getters: {
  
  },
  modules: {
    auth,
    modal,
  },
});
