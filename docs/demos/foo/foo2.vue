<template>
  <gaofeng-foo :msg="msg"></gaofeng-foo>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const msg = ref("hello foo from vite");
</script>