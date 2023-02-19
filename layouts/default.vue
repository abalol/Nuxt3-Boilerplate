<template>
  <Nuxt />
  <Loading />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loading from '../components/Loading.vue';
export default defineComponent({
  components: {
    Loading,
  },
  setup() {
    return {};
  },
});
</script>
