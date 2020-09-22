import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commonModalType: "",
    isCommonModalOpen: false,
    isStoryModalOpen: false,
    head: "",
    message: "",
  },
  mutations: {
    setCommonModalType: (state, type) => {state.commonModalType = type;},
    setIsCommonModalOpen: (state, flag) => {state.isCommonModalOpen = flag;},
    setIsStoryModalOpen: (state, flag) => {state.isStoryModalOpen = flag;},
    setMessage: (state, message) => {state.message = message;},
    setHead: (state, head) => {state.head = head;},
  },
  actions: {
    openCommonModal: ({commit}, {type, head, message}) => {
      if (head) {commit("setHead", head);}
      if (message) {commit("setMessage", message);}
      commit("setCommonModalType", type);
      commit("setIsStoryModalOpen", false);
      commit("setIsCommonModalOpen", true);
    },
    closeCommonModal: ({commit}) => {commit("setIsCommonModalOpen", false);},
    
    openStoryModal: ({commit}) => {
      commit("setIsCommonModalOpen", false);
      commit("setIsStoryModalOpen", true);
    },
    closeStoryModal: ({commit}) => {commit("setIsStoryModalOpen", false);},
    registerNewUSer: async (context, data) => {
      try {
         const res = await fetch("https://st-remy.django.the-uweb.ru/auth/users/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        }); 
        return await res.json();
      } catch(err) {
        throw err;
      }
    },
    login: async (context, data) => {
      try {
         const res = await fetch("https://st-remy.django.the-uweb.ru/auth/token/login/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        }); 
        return await res.json();
      } catch(err) {
        throw err;
      }
    },
  },
  getters: {
    commonModalType: state => state.commonModalType,
    isCommonModalOpen: state => state.isCommonModalOpen,
    isStoryModalOpen: state => state.isStoryModalOpen,
    head: state => state.head,
    message: state => state.message,
  },
  modules: {

  },
});
