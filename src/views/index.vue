<template>
  <div class="index">
    {{ name }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {},
  props: {},
  setup() {
    let name = ref('hello world');
    return {
      name,
    };
  },
});
</script>
<style scoped lang="scss">
.index {
  font-size: 20px;
}
</style>
