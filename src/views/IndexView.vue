<template>
  <div class="index">
    {{ name }}
    <el-button type="success" @click="Massage">按钮</el-button>
  </div>
</template>
<script lang="ts">
import { ElMessage } from "element-plus";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  props: {},
  setup() {
    let name = ref("hello world");
    let Massage = () => {
      ElMessage({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    };
    return {
      name,
      Massage
    };
  }
});
</script>
<style scoped lang="scss">
.index {
  font-size: 20px;
}
</style>
