<template>
  <view>
    <view backgroundColor="#f8f8f8" top="20" right="20" bottom="20" left="20" :height="Ti.UI.SIZE" :clipMode="Ti.UI.iOS.CLIP_MODE_DISABLED">
      <view left="0" width="4" :backgroundColor="primaryColor" zIndex="1" :clipMode="Ti.UI.iOS.CLIP_MODE_DISABLED">
        <view :backgroundColor="primaryColor" width="20" height="20" top="14" borderRadius="10">
          <label color="#fff">!</label>
        </view>
      </view>
      <view top="12" right="24" bottom="12" left="30" layout="vertical">
        <slot/>
      </view>
    </view>
  </view>
</template>

<script>
const colorTable = {
  info: '#2973b7',
  error: '#6ff'
}

export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => {
        return [ 'info', 'warning', 'error' ].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    primaryColor: function () {
      return colorTable[this.type];
    }
  }
}
</script>
