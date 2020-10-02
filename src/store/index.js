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
    replaceStory: (state, data) => {
      // state.userStories[data.index] = data.data;
      state.userStories.splice(data.index, 1, data.data);
    },
    addStory: (state, data) => {
      state.userStories.unshift(data);
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
    sendStory: async (_, data) => {
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
    updateStory: async (_, payload) => {
      try {
        let response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_UPDATE_HISTORY}${payload.id}`, payload.data, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
       return response;
        // commit("setUserStories", response.data.results);
      } catch(err) {
        throw err;
      }
    },
    replaceStory: ({commit, getters}, data) => {
      const id = data.id;
      const userStories = getters.userStories;
      const index = userStories.findIndex( (story) => story.id === data.id );
      commit("replaceStory", {data:data, index: index});
    },
    addStory: ({commit}, data) => {
      commit("addStory", data);
    },
    getUserStories: async ({commit}) => {
      try {
        let response = await axios.get(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_GET_USER_STORIES}`, {headers: {Authorization: `Token ${localStorage.getItem("token")}`}});
        console.log(response); //ТАЙМАУТ
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
