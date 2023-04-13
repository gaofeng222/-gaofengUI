<template>
  <g-test :msg="msg"></g-test>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const msg = ref("hello foo from vite");
</script>