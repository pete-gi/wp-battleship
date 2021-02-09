<template>
  <div class="ship"></div>
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
@use './ShipStyles' as ShipMixin;

@include ShipMixin.skeleton;
@include ShipMixin.visuals;
</style>
