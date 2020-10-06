import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";

export default {
  methods: {
    async logout() {
      if (this.closeUserMenu) {this.closeUserMenu();}
      try {
        const response = await this.$store.dispatch("logout", localStorage.getItem("token"));
        localStorage.removeItem("token");
        if (this.$route.name === "Profile") {
          this.$router.push("/");
        } else {
          this.$store.dispatch("openAlert", {type: "success", text: this.$messages.ALERT_LOGOUT_SUCCESS});
        }
        this.$store.commit("clearUserInfo");
      } catch(err) {
        apiErrorHandler.call(this, err);
      }
    },
  },
}