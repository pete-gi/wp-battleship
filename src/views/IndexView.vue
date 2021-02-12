<template>
  <div class="view">
    <div class="row">
      <div class="col s6 offset-s3">
        <wp-menu></wp-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WpMenu from "@/Components/Interface/Menu/MenuComponent.vue";

@Component({
  name: "IndexView",
  components: {
    WpMenu
  }
})
export default class Index extends Vue {}
</script>
