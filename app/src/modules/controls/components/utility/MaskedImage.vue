<template>
  <base-window @postlayout="onPostLayout()" title="Masked Image" layout="vertical">
    <view layout="vertical" height="40%">
      <base-label top="5" color="#7f8c8d" fontSize="14">Mode: {{currentBlendModeName}}</base-label>
      <base-label top="10" left="20" :font="{ fontWeight: 'bold' }">Image and tint</base-label>
      <masked-image ref="tintImage" top="20" mask="/images/titanium-logo.png" tint="#4fc08d" :mode="currentBlendMode"/>
    </view>
    <view layout="vertical" height="60%">
      <base-label top="20" left="20" fontWeight="bold">Two images</base-label>
      <masked-image ref="modeImage" top="20" mask="/images/titanium-logo.png" image="/images/vuejs.png" :mode="currentBlendMode"/>
      <view>
        <base-button @click="switchBlendMode()" bottom="10">Change blend mode</base-button>
      </view>
    </view>
  </base-window>
</template>

<script>
export default {
  data: function () {
    return {
      currentBlendModeIndex: 1,
      // Object.keys(Ti.UI) with a filter does not work, so we create this list manually
      blendModes: [
        'BLEND_MODE_CLEAR',
        'BLEND_MODE_COLOR',
        'BLEND_MODE_COLOR_BURN',
        'BLEND_MODE_COLOR_DODGE',
        'BLEND_MODE_COPY',
        'BLEND_MODE_DARKEN',
        'BLEND_MODE_DESTINATION_ATOP',
        'BLEND_MODE_DESTINATION_IN',
        'BLEND_MODE_DESTINATION_OUT',
        'BLEND_MODE_DESTINATION_OVER',
        'BLEND_MODE_DIFFERENCE',
        'BLEND_MODE_EXCLUSION',
        'BLEND_MODE_HARD_LIGHT',
        'BLEND_MODE_HUE',
        'BLEND_MODE_LIGHTEN',
        'BLEND_MODE_LUMINOSITY',
        'BLEND_MODE_MULTIPLY',
        'BLEND_MODE_NORMAL',
        'BLEND_MODE_OVERLAY',
        'BLEND_MODE_PLUS_DARKER',
        'BLEND_MODE_PLUS_LIGHTER',
        'BLEND_MODE_SATURATION',
        'BLEND_MODE_SCREEN',
        'BLEND_MODE_SOFT_LIGHT',
        'BLEND_MODE_SOURCE_ATOP',
        'BLEND_MODE_SOURCE_IN',
        'BLEND_MODE_SOURCE_OUT',
        'BLEND_MODE_XOR'
      ]
    }
  },
  computed: {
    currentBlendMode() {
      return Ti.UI[this.blendModes[this.currentBlendModeIndex]];
    },
    currentBlendModeName() {
      return this.blendModes[this.currentBlendModeIndex];
    }
  },
  methods: {
    onPostLayout() {
      const tintImageHeight = this.$refs.tintImage.titaniumView.size.height;
      this.$refs.tintImage.titaniumView.height = tintImageHeight - 20;
      this.$refs.tintImage.titaniumView.width = tintImageHeight - 20;

      const modeImageHeight = this.$refs.modeImage.titaniumView.size.height;
      this.$refs.modeImage.titaniumView.height = modeImageHeight - 100
      this.$refs.modeImage.titaniumView.width = modeImageHeight - 100;
    },
    switchBlendMode() {
      let newBlendModeIndex = this.currentBlendModeIndex + 1;
      this.currentBlendModeIndex = newBlendModeIndex >= this.blendModes.length ? 0 : newBlendModeIndex;
    }
  }
}
</script>
