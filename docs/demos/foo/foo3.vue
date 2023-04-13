<template>
  <g-test :msg="msg" btnText="发送"></g-test>
</template>
  
  <script lang="ts" setup>
import { ref } from "vue";

const msg = ref("hello foo from @gaofeng-ui");
</script>