<template>
  <div class="sidebar"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {}
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss">
@use './SidebarStyles' as SidebarMixin;

@include SidebarMixin.skeleton;
@include SidebarMixin.visuals;
</style>
