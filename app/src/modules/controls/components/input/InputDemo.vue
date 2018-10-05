<template>
  <vertical-layout :height="Ti.UI.SIZE" top="30" left="20" right="20">
    <view :height="Ti.UI.SIZE">
      <label left="0" color="#34495e" :font="{ fontWeight: 'bold' }">{{name}}</label>
      <label right="0" color="#7f8c8d" :font="{ fontSize: 12 }">{{info}}</label>
    </view>
    <view :height="Ti.UI.SIZE" top="5">
      <view :height="Ti.UI.SIZE" :ios:clipMode="Ti.UI.iOS.CLIP_MODE_DISABLED" top="10" bottom="10">
        <slot/>
      </view>
    </view>
  </vertical-layout>
</template>

<script>
export default {
  name: 'InputDemo',
  data: () => {
    return {
      state: null,
    }
  },
  props: {
    name: String,
    hint: String
  },
  computed: {
    info: function () {
      return this.state === null ? this.hint : this.state;
    }
  }
}
</script>
