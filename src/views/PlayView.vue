<template>
  <div class="view">
    <wp-board :size="size" :hitsCount="hitsCount"></wp-board>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WpBoard from "@/Components/Game/Board/BoardComponent.vue";

@Component({
  name: "PlayView",
  components: {
    WpBoard
  }
})
export default class Play extends Vue {
  get size() {
    return this.$storage.get("size");
  }

  get hitsCount() {
    return this.$storage.get("hitsCount");
  }
}
</script>
