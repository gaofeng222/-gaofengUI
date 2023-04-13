<template>
  <teleport to="body">
    <div class="g-drawer" :class="{'g-drawer--visible':visible}">
      <div class="g-drawer--shade" :class="[{ 'g-drawer--shade-visible': visible }]" @click="close"></div>
      <div class="g-drawer--content--close" :class="[{ 'g-drawer--content--visible': visible }]">
        <span @click="close">关闭</span>
      </div>
      <div
        class="g-drawer--content"
        :class="[
          'g-drawer--content-' + direction,
        {
        'g-drawer--content-visible': visible
        }
      ]"
      >
        <slot name="head"></slot>
        <div>contentcontentcontentcontent</div>
        <slot name="footer"></slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";
import { gDrawerProps, GDrawerTypes } from "./types";
defineProps(gDrawerProps);

defineOptions({
  name: "g-drawer"
});
const emit = defineEmits(["update:visible", "update:title"]);

const hide = () => {
  emit("update:visible", false);
};
const close = () => {
  console.log("close");
  hide();
};
const showHandle = () => {
  emit("update:title", "new title");
  emit("update:visible", false);
};
</script>

<style lang="scss" scoped>
$prefix: g-drawer;
$safe-area-inset-bottom: 30px;
.#{$prefix} {
  &--shade {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
    & {
      &-visible {
        bottom: 0;
        opacity: 1;
      }
    }
  }
  &--content {
    position: fixed;
    z-index: 999;
    transition: all 0.3s ease-in-out 0s;
    padding-bottom: $safe-area-inset-bottom;
    // opacity: 0;

    &-rtl {
      height: 100%;
      transform: translateX(200%);
    }
    &-ltr {
      height: 100%;
      transform: translateX(-200%);
    }
    &-btt {
      width: 100%;
      bottom: 0;
      left: 0;
      transform: translateY(100%);
    }
    &-ttb {
      width: 100%;
      top: 0;
      left: 0;
      transform: translateY(-100%);
    }
    & {
      &-visible {
        visibility: visible;
        transform: translateX(0);
      }
    }
    &--close {
      position: absolute;
      top: 10px;
      right: 10px;
      opacity: 0;

      z-index: 1000;
      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        background-color: white;
        color: #333 !important;
        // border-radius: 50%;
        border-radius: 50%;
      }
    }
    &--visible {
      opacity: 1;
    }
  }
}
</style>