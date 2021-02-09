<template>
  <div class="menu"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {},
})
export default class Menu extends Vue {}
</script>

<style lang="scss">
@use './MenuStyles' as MenuMixin;

@include MenuMixin.skeleton;
@include MenuMixin.visuals;
</style>
