<template>
  <view :height="Ti.UI.SIZE">
    <view backgroundColor="#f8f8f8" top="20" right="20" bottom="20" left="20" :height="Ti.UI.SIZE" :ios:clipMode="Ti.UI.iOS.CLIP_MODE_DISABLED">
      <view ref="borderView" left="0" width="4" :backgroundColor="primaryColor" zIndex="1" :ios:clipMode="Ti.UI.iOS.CLIP_MODE_DISABLED">
        <view :backgroundColor="primaryColor" width="20" height="20" top="14" borderRadius="10">
          <label color="#fff">!</label>
        </view>
      </view>
      <view ref="content" @postlayout="computeHeight" right="24" left="30" layout="vertical" :height="Ti.UI.SIZE">
        <slot/>
      </view>
    </view>
  </view>
</template>

<script>
const colorTable = {
  info: '#2973b7',
  error: '#f66'
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
  },
  methods: {
    computeHeight() {
      const computedHeight = this.$refs.content.getAttribute('size').height + 24;
      const currentBorderHeight = this.$refs.borderView.getAttribute('size').height;
      if (currentBorderHeight !== computedHeight) {
        this.$refs.borderView.setAttribute('height', computedHeight);
      }
    }
  }
}
</script>
