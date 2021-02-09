<template>
  <div class="view">
    <wp-board></wp-board>
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
export default class Play extends Vue {}
</script>
