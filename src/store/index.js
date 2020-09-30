import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.js';
import modal from './modal.js';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beforeImage: null,
    afterImage: null,
    beforeYear: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
    afterYear: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
    userStories: [],
  },
  mutations: {
    setValue: (state, data) => {
      state[data.key] = data.value;
    },
    setUserStories: (state, stories) => {
      state.userStories = stories;
    },
  },
  actions: {
    setValue: ({commit}, data) => {
      commit("setValue", data);
    },
    // setYear: ({commit}, data) => {
    //   commit("setYear", data);
    // },
    sendFeedback: async (_, data) => {
      try {
        let response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_FEEDBACK_API}`, data, {timeout: CONFIG.SERVER_API_TIMEOUT});
        return response;
      } catch(err) {
        throw err;
      }
    },
    sendHistory: async (_, data) => {
      try {
        let response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_CREATE_HISTORY}`, data, {
          timeout: CONFIG.SERVER_API_TIMEOUT,
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
    getUserStories: async ({commit}) => {
      try {
        let response = await axios.get(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_GET_USER_STORIES}`, {headers: {Authorization: `Token ${localStorage.getItem("token")}`}});
        console.log(response);
        commit("setUserStories", response.data.results);
      } catch(err) {
        throw err;
      }
    }, 
  },
  getters: {
    beforeImage: state => state.beforeImage,
    afterImage: state => state.afterImage,
    beforeYear: state => state.beforeYear,
    afterYear: state => state.afterYear,
    userStories: state => state.userStories,
  },
  modules: {
    auth,
    modal,
  },
});
