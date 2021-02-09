<template>
  <div class="table"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {},
})
export default class Table extends Vue {}
</script>

<style lang="scss">
@use './TableStyles' as TableMixin;

@include TableMixin.skeleton;
@include TableMixin.visuals;
</style>
