import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // commonModalType: "",
    // isCommonModalOpen: false,
    // isStoryModalOpen: false,
    // head: "",
    // message: "",
    //
    isModalOpen: false,
    modalType: "",
    modalData: {},
  },
  mutations: {
    // setCommonModalType: (state, type) => {state.commonModalType = type;},
    // setIsCommonModalOpen: (state, flag) => {state.isCommonModalOpen = flag;},
    // setIsStoryModalOpen: (state, flag) => {state.isStoryModalOpen = flag;},
    // setMessage: (state, message) => {state.message = message;},
    // setHead: (state, head) => {state.head = head;},
    //
    setModalData: (state, data) => {state.modalData = data;},
    setModalType: (state, type) => {state.modalType = type;},
    setIsModalOpen: (state, flag) => {state.isModalOpen = flag;},
  },
  actions: {
    // openCommonModal: ({commit}, {type, head, message}) => {
    //   if (head) {commit("setHead", head);}
    //   if (message) {commit("setMessage", message);}
    //   commit("setCommonModalType", type);
    //   commit("setIsStoryModalOpen", false);
    //   commit("setIsCommonModalOpen", true);
    // },
    // closeCommonModal: ({commit}) => {commit("setIsCommonModalOpen", false);},
    
    // openStoryModal: ({commit}) => {
    //   commit("setIsCommonModalOpen", false);
    //   commit("setIsStoryModalOpen", true);
    // },
    // closeStoryModal: ({commit}) => {commit("setIsStoryModalOpen", false);},
    //
    openModal: ({commit}, {type, data}) => {
      if (data) {commit("setModalData", data);}
      commit("setModalType", type);
      commit("setIsModalOpen", true);
    },
    closeModal: ({commit}) => {
      commit("setIsModalOpen", false);
    },
    /////////////////////////////
    registerNewUser: async (context, data) => {
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
      // try {
      //    const res = await fetch("https://st-remy.django.the-uweb.ru/auth/token/login/", {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //     headers: {
      //       'Content-Type': 'application/json;charset=utf-8',
      //     },
      //   }); 
      //   return await res.json();
      // } catch(err) {
      //   throw err;
      // }

        try {
          const res = await fetch("https://st-remy.django.the-uweb.ru/auth/users/me/?limit=1&offset=1", {
           headers: {
             // 'Content-Type': 'application/json;charset=utf-8',
             "Authorization": "Token 2186f0fa544647de0f41c639a84e93387412affe",
           },
         }); 
         return await res.json();
       } catch(err) {
         throw err;
       }
    },
  },
  getters: {
    // commonModalType: state => state.commonModalType,
    // isCommonModalOpen: state => state.isCommonModalOpen,
    // isStoryModalOpen: state => state.isStoryModalOpen,
    // head: state => state.head,
    // message: state => state.message,
    //
    isModalOpen: state => state.isModalOpen,
    modalType: state => state.modalType,
    modalData: state => state.modalData,
  },
  modules: {

  },
});
