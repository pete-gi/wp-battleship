import Vue from "vue";
import App from "./App.vue";
import StoragePlugin from "./Plugins/StoragePlugin";
import router from "./router";

Vue.config.productionTip = false;

// Podpięcie własnego pluginu do zapisywania i odczytywania danych LocalStorage
Vue.use(StoragePlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
