<template>
  <div class="menu">
    <form>
      <div class="range-field">
        <label for="size"> Rozmiar planszy: {{ size }} </label>
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
        <label for="hitsCount"> Liczba ruchów: {{ hitsCount }} </label>
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
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {}
})
export default class Menu extends Vue {}
</script>

<style lang="scss" scoped>
@use './MenuStyles' as MenuMixin;

@include MenuMixin.skeleton;
@include MenuMixin.visuals;
</style>
