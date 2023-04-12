<template>
  <el-button type="primary" @click="showMsg">测试按钮</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
const showMsg = () => {
  ElMessage({
    message: "<h2>温馨提示:</h2>"
  });
};
</script>