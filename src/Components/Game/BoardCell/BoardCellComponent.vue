<template>
  <button
    class="boardCell"
    :class="`boardCell--${state}`"
    @click="$emit('hit')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import BoardCellState from "@/Models/Enums/BoardCellState";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "BoardCellComponent",
  components: {}
})
export default class BoardCell extends Vue {
  @Prop() readonly state!: BoardCellState;
}
</script>

<style lang="scss" scoped>
@use './BoardCellStyles' as BoardCellMixin;

@include BoardCellMixin.skeleton;
@include BoardCellMixin.visuals;
</style>
