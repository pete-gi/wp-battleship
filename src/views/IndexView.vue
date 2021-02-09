<template>
  <div class="view">
    <nav class="menu">
      <form>
        <div class="field">
          <label for="width" class="field__label"> Liczba pól w osi X </label>
          <input
            type="slider"
            id="width"
            name="width"
            class="field__input"
            min="0"
            max="20"
            v-model="width"
          />
        </div>
        <div class="field">
          <label for="width" class="field__label"> Liczba pól w osi X </label>
          <input
            type="slider"
            id="height"
            name="height"
            class="field__input"
            min="0"
            max="20"
            v-model="width"
          />
        </div>
      </form>
      <router-link to="/play">Graj</router-link>
      <router-link to="/stats">Statystyki</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "IndexView"
})
export default class Index extends Vue {
  beforeCreate() {
    this.width = 10;
    this.height = 10;
  }

  get width(): number {
    const value: number = this.$storage.get("width") as number;
    return value;
  }
  set width(value: number) {
    this.$storage.set("width", value);
  }

  get height(): number {
    const value: number = this.$storage.get("height") as number;
    return value;
  }
  set height(value: number) {
    this.$storage.set("height", value);
  }
}
</script>
