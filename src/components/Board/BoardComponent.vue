<template>
  <div class="board"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {},
})
export default class Board extends Vue {}
</script>

<style lang="scss">
@use './BoardStyles' as BoardMixin;

@include BoardMixin.skeleton;
@include BoardMixin.visuals;
</style>
