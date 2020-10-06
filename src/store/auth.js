import axios from "axios";

export default {
  state: {
    userInfo: null,
  },
  mutations: {
    setUserInfo: (state, data) => {state.userInfo = data;},
    clearUserInfo: (state) => {state.userInfo = null;}
  },
  actions: {
    registerUser: async (_, data) => {
      try {
        const response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_REGISTER_API}`, data, {
          timeout: CONFIG.SERVER_API_TIMEOUT,
        });
        return response;
      } catch(err) {
        throw err;
      }
    },
    setUserInfo: ({commit}, data) => {
      commit("setUserInfo", data);
    },
    loginUser: async (_, data) => {
      try {
        const response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_LOGIN_API}`, data, {
          timeout: CONFIG.SERVER_API_TIMEOUT,
        });
        return response;
      } catch(err) {
        throw err;
      }
    },
    getUserInfo: async (_, token) => {
      try {
        const response = await axios.get(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_GET_USER_INFO_API}`, {
          timeout: CONFIG.SERVER_API_TIMEOUT,
          headers: {Authorization: `Token ${token}`},
        });
        return response;
      } catch(err) {
        throw err;
      }
    },
    logout: async (_, token) => {
      try {
        const response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_LOGOUT_API}`, null, {
          timeout: CONFIG.SERVER_API_TIMEOUT,
          headers: {Authorization: `Token ${token}`},
        });
        return response;
      } catch(err) {
        throw err;
      }
    },
    sendRestore: async (_, data) => {
      try {
        const response = await axios.post(`${CONFIG.SERVER_BASE}${CONFIG.SERVER_RESTORE_PASS_API}`, data, {
          timeout: CONFIG.SERVER_API_TIMEOUT,
        });
        return response;
      } catch(err) {
        throw err;
      }
    },
  },
  getters: {
    userInfo: state => state.userInfo,
  },
}