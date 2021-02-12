import Vue from "vue";
import App from "./App.vue";
import StoragePlugin from "./Plugins/StoragePlugin";
import router from "./Router";
import "materialize-css/dist/css/materialize.min.css";

Vue.config.productionTip = false;

// Podpięcie własnego pluginu do zapisywania i odczytywania danych LocalStorage
Vue.use(StoragePlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
