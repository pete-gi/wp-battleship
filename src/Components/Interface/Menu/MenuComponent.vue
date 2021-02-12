<template>
  <div class="menu">
    <form>
      <div class="range-field">
        <label for="size">
          Rozmiar planszy: <b>{{ size }}</b>
        </label>
        <input
          type="range"
          id="size"
          name="size"
          min="10"
          max="20"
          v-model="size"
        />
      </div>
      <div class="range-field">
        <label for="hitsCount">
          Liczba ruchów: <b>{{ hitsCount }}</b>
        </label>
        <input
          type="range"
          id="hitsCount"
          name="hitsCount"
          min="20"
          max="100"
          v-model="hitsCount"
        />
      </div>
    </form>
    <ul class="collection align-center">
      <li class="collection-item">
        <router-link to="/play" class="btn">Graj</router-link>
      </li>
      <li class="collection-item">
        <router-link to="/stats" class="btn">Statystyki</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {}
})
export default class Menu extends Vue {
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

<style lang="scss" scoped>
@use './MenuStyles' as MenuMixin;

@include MenuMixin.skeleton;
@include MenuMixin.visuals;
</style>
