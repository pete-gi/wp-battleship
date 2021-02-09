<template>
  <div class="modal"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {},
})
export default class Modal extends Vue {}
</script>

<style lang="scss">
@use './ModalStyles' as ModalMixin;

@include ModalMixin.skeleton;
@include ModalMixin.visuals;
</style>
