<template>
  <form>
    <label for="locale-select">{{ $t('language') }}: </label>
    <select id="locale-select" v-model="$i18n.locale">
      <option value="en">en</option>
      <option value="ja">ja</option>
    </select>
  </form>
  <div class="route" @click="show">
    <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
  </div>
</template>
<script lang="ts">

interface Data {
  name: string
  version: string
}

export default defineComponent({
  components: {},
  layout: 'default',
  setup() {
    const { show } = loadingState()

    const data: Data = reactive({
      name: 'Nuxt3 Boilerplate',
      version: '1.0.0'
    });

    onMounted(async () => {
    });

    return {
      show,
      ...toRefs(data),
    };
  },
});
</script>
<style lang="scss" scoped>
.route {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
  color: black;

  .child {
    margin-left: 8px;
    display: inline-block;
  }
}
</style>
