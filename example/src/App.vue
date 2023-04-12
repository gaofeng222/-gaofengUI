<!--
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 09:50:41
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 10:08:21
 * @FilePath: \@gaofengUI\example\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import { ref } from "vue";
const msg = ref("Hello world");
</script>

<template>
  <div class="site">
    <gaofeng-foo :msg="msg"></gaofeng-foo>
  </div>
</template>

<style scoped>
.site {
  padding: 20px;
}
</style>
