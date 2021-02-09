import Vue from "vue";
import StoragePlugin from "./Models/Interfaces/StoragePluginInterface";

declare module "*.vue" {
  export default Vue;
}

declare module "vue/types/vue" {
  interface Vue {
    $storage: StoragePlugin;
  }
}
