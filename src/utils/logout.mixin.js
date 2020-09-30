import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";

export default {
  methods: {
    async logout() {
      if (this.closeUserMenu) {this.closeUserMenu();}
      try {
        const response = await this.$store.dispatch("logout", localStorage.getItem("token")); //разлогинились
        localStorage.removeItem("token"); //удаляем токен из локалстораджа
        if (this.$route.name === "Profile") { //если сидим в профиле - редирект на главную
          this.$router.push("/");
        } else { //иначе сообщение об успешном выходе
          this.$store.dispatch("openAlert", {type: "success", text: this.$messages.ALERT_LOGOUT_SUCCESS});
        }
        this.$store.commit("clearUserInfo"); //удаляем юзер-инфо из склада
      } catch(err) {
        apiErrorHandler.call(this, err);
      }
    },
  },
}