<template>
  <div class="view">
    <div class="collection">
      <div class="collection-item">
        <router-link class="btn" to="/">Wróć</router-link>
      </div>
    </div>
    <wp-modal v-if="!stats.length"> Brak wyników do wyświetlenia. </wp-modal>
    <wp-table v-else :stats="stats"></wp-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { StorageItem } from "@/Models/Interfaces/StoragePluginInterface";

import WpModal from "@/Components/Interface/Modal/ModalComponent.vue";
import WpTable from "@/Components/Interface/Table/TableComponent.vue";

@Component({
  name: "StatsView",
  components: {
    WpModal,
    WpTable
  }
})
export default class Stats extends Vue {
  get stats() {
    const allStats: StorageItem[] =
      (this.$storage.get("stats") as StorageItem[]) || [];
    return allStats;
  }
}
</script>
