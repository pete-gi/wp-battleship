<template>
  <div class="shipCell"></div>
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
@use './ShipCellStyles' as ShipCellMixin;

@include ShipCellMixin.skeleton;
@include ShipCellMixin.visuals;
</style>
