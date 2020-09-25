export default {
  state: {
    isModalOpen: false,
    modalType: "",
    modalData: {},
    alertData: {},
    isAlertOpen: false,
  },
  mutations: {
    setModalData: (state, data) => {state.modalData = data;},
    setAlertData: (state, data) => {state.alertData = data;},
    setModalType: (state, type) => {state.modalType = type;},
    setIsModalOpen: (state, flag) => {state.isModalOpen = flag;},
    setIsAlertOpen: (state, flag) => {state.isAlertOpen = flag;},
  },
  actions: {
    openModal: ({commit}, {type, data}) => {
      if (data) {commit("setModalData", data);}
      commit("setModalType", type);
      commit("setIsModalOpen", true);
    },
    closeModal: ({commit}) => {
      commit("setIsModalOpen", false);
    },
    openAlert: ({commit}, data) => {
      if (data) {commit("setAlertData", data);}
      commit("setIsAlertOpen", true);
    },
    closeAlert: ({commit}) => {
      commit("setIsAlertOpen", false);
    },
  },
  getters: {
    isAlertOpen: state => state.isAlertOpen,
    isModalOpen: state => state.isModalOpen,
    modalType: state => state.modalType,
    modalData: state => state.modalData,
    alertData: state => state.alertData,
  },
}
