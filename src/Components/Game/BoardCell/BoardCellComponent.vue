<template>
  <div class="boardCell"></div>
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
@use './BoardCellStyles' as BoardCellMixin;

@include BoardCellMixin.skeleton;
@include BoardCellMixin.visuals;
</style>
