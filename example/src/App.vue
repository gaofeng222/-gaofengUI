<script setup lang="ts">
import { ref } from "vue";
const msg = ref("Hello world");
const visible = ref(false);
const showHandle = () => {
  visible.value = true;
};
let title = ref("这是默认标题222");
</script>

<template>
  <div class="site">
    <gaofeng-foo :msg="msg"></gaofeng-foo>
    <button @click="showHandle">show</button>
    <g-drawer v-model:visible="visible" v-model:title="title" direction="btt">
      <h2>this is a title</h2>
      <template #head>
        <div>这是头部信息</div>
      </template>
      <template #footer>
        <div>这是脚步信息</div>
      </template>
    </g-drawer>
  </div>
</template>

<style scoped>
.site {
  padding: 20px;
}
</style>
