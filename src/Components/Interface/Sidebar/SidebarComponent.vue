<template>
  <ul class="collection with-header">
    <li class="collection-header">
      <h4>Wynik</h4>
    </li>
    <li class="collection-item"><b>Dostępne ruchy:</b> {{ hitsRemaining }}</li>
    <li class="collection-item">
      <b>Zdobyte punkty:</b> {{ shipsPartsDestroyed }}
    </li>
    <li class="collection-item">
      <b>Pozostałe statki:</b> {{ shipsRemaining }}
    </li>
    <li class="collection-header">
      <h4>Akcje</h4>
    </li>
    <li class="collection-item">
      <button class="btn" @click="restart">Restart</button>
    </li>
    <li class="collection-item">
      <button class="btn" @click="toggleCheating">
        {{ isCheating }} podpowiedzi
      </button>
    </li>
    <li class="collection-item">
      <button class="btn" @click="back">Wróć do menu</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {}
})
export default class Sidebar extends Vue {
  @Prop() readonly hitsRemaining!: number;
  @Prop() readonly shipsPartsDestroyed!: number;
  @Prop() readonly shipsRemaining!: number;
  @Prop() readonly cheating!: boolean;

  get isCheating() {
    return this.cheating ? "Wyłącz" : "Włącz";
  }

  @Emit("restart")
  restart() {
    /* */
  }

  @Emit("toggleCheating")
  toggleCheating() {
    /* */
  }

  @Emit("back")
  back() {
    /* */
  }
}
</script>

<style lang="scss">
@use './SidebarStyles' as SidebarMixin;

@include SidebarMixin.skeleton;
@include SidebarMixin.visuals;
</style>
