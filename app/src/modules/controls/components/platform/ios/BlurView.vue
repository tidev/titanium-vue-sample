<template>
  <base-window title="Blur View">
    <vertical-layout>
      <image-view image="/images/vuejs.png" width="250" height="250">
        <blur-view ref="blurView"/>
      </image-view>
      <tabbed-bar top="20" tintColor="#4fc08d" :labels="blurEffects" @click="changeEffect($event)"/>
    </vertical-layout>
  </base-window>
</template>

<script>
const effects = [
    Ti.UI.iOS.BLUR_EFFECT_STYLE_EXTRA_LIGHT,
    Ti.UI.iOS.BLUR_EFFECT_STYLE_LIGHT,
    Ti.UI.iOS.BLUR_EFFECT_STYLE_DARK,
];

export default {
  data: function () {
    return {
      blurEffects: [ 'Extra light', 'Light', 'Dark' ]
    }
  },
  methods: {
    changeEffect(e) {
      this.$refs.blurView.titaniumView.effect = effects[e.index];
    }
  }
}
</script>
