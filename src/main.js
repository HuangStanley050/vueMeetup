import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Alert from "./components/shared/Alert.vue";
import { store } from "./store";

Vue.config.productionTip = false;
Vue.component("Alert", Alert);
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
