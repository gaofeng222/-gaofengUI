<template>
  <g-drawer v-model:visible="show" v-model:title="title
    " direction="rtl">
    <h2>this is a title</h2>
    <template #head>
      <div>这是头部信息</div>
    </template>
    <template #footer>
      <div>这是脚步信息</div>
    </template>
  </g-drawer>
  <button @click="showHandle">click</button>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
let show = ref(true);

const visible = ref(false);
const showHandle = () => {
  show.value = true;
};
let title = ref("这是默认标题222");
</script>