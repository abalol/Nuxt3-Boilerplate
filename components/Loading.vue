<template>
  <div>
    <img src="@/assets/images/loading.svg" class="loading" v-if="status" @click="hide" />
  </div>
</template>
<script setup lang="ts">
import { loadingState } from '@/composables/loading';
const { status, hide } = loadingState()
</script>
<style>
/* Absolute Center Spinner */
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  width: 200px;
  margin: auto;
  overflow: show;
}
</style>
