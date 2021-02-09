<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App"
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "ress";

.app {
  display: flex;
  flex-direction: column;
  background-origin: hsl(0, 0, 95);
}
</style>
