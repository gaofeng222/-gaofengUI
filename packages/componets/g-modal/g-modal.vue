<template>
  <div class="x-modal" v-if="value">
    <div class="x-modal--container">
      <div class="x-modal--title">{{ title }}</div>
      <div class="x-modal--body">
        <slot name="x-modal--slot">
          <div class="x-modal--slotDefaults">
            {{ contentText }}
          </div>
        </slot>
      </div>
      <slot name="x-modal--footer--slot">
        <div class="x-modal--footer">
          <div class="x-modal--cancel" @click="cancel" v-if="showCancelButton">
            <text class="x-modal--cancel--content">{{
              computedCancelText
            }}</text>
          </div>
          <div class="x-modal--confirm" @click="confirm">
            <text class="x-modal--confirm--content">{{
              computedConfirmText
            }}</text>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    contentText: String,
    cancelText: String,
    confirmText: String,
    showCancelButton: {
      type: Boolean,
      default: true
    }
  })


  function cancel() {
    this.$emit('input', false);
    this.$emit('cancel');
  }
 
  function confirm() {
    this.$emit('confirm');
  }

  const computedConfirmText = computed(() => {
    return this.confirmText 
  });
  const computedCancelText = computed(() => {
    return this.cancelText 
  });

</script>

<style lang="scss">
$prefix: x-modal;
.#{$prefix} {
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  font-family: PingFang SC;
}
.#{$prefix}--container {
  width: 610rpx;
  /*height:300rpx;*/
  border-radius: 12rpx;
  overflow: hidden;
  /* @include bg-dp(1); */
}
.#{$prefix}--title {
  padding: 28rpx 0;
  display: flex;
  justify-content: center;
  /* font-size: $uni-font-size-lg;
  color: $uni-text-color; */
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  line-clamp: 2;
  font-weight: bold;
}
.#{$prefix}--body {
  display: flex;
  align-items: center;
  // text-align: center;
  flex-wrap: wrap;
  padding: 10rpx 20rpx;
  /* font-size: $uni-font-size-lg;
  color: $uni-text-color; */
  justify-content: center;
}
.#{$prefix}--slotDefaults {
  font-weight: normal;
}
.#{$prefix}--footer {
  display: flex;
  justify-content: center;
  flex-direction: row;
  // border-top: 1px solid $uni-border-color;
  /* @include thin-border(); */
}
.#{$prefix}--cancel {
  width: 50%;
  height: 100%;
  padding: 16rpx 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 24rpx 0;
  /* @include thin-border(right, $uni-border-color, 2px); */
  &--content {
    /* font-size: $uni-font-size-lg;
    color: $uni-text-color-grey; */
  }
  &:after {
    transform: scaleY(1);
  }
}
.#{$prefix}--confirm {
  width: 50%;
  height: 100%;
  padding: 16rpx 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24rpx 0;
  box-sizing: border-box;
  &--content {
    /* font-size: $uni-font-size-lg;
    color: $uni-color-primary; */
  }
}
</style>
