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
import { Component, Vue, Watch } from "vue-property-decorator";
import WpMenu from "@/Components/Interface/Menu/MenuComponent.vue";

@Component({
  name: "IndexView",
  components: {
    WpMenu
  }
})
export default class Index extends Vue {
  size: number | null = null;
  hitsCount: number | null = null;

  created() {
    this.size = (this.$storage.get("size") as number) || 10;
    this.hitsCount = (this.$storage.get("hitsCount") as number) || 100;
  }

  @Watch("size")
  onSizeChange(value: number) {
    this.$storage.set("size", value);
  }

  @Watch("hitsCount")
  onHitsCountChange(value: number) {
    this.$storage.set("hitsCount", value);
  }
}
</script>
