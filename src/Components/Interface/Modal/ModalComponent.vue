<template>
  <div class="game-modal">
    <div class="s6">
      <div class="collection">
        <div class="collection-item">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "",
  components: {}
})
export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
@use './ModalStyles' as ModalMixin;

@include ModalMixin.skeleton;
@include ModalMixin.visuals;
</style>
