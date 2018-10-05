<template>
  <base-window title="Toolbar">
    <view :height="Ti.UI.SIZE" layout="vertical">
      <base-label fontSize="18">Oh look, it's down there!</base-label>
      <base-icon top="20" icon="arrow-down" fontSize="64" color="#4fc08d"/>
    </view>
    <toolbar tintColor="#4fc08d" bottom="0" barColor="white">
      <button @click="sendTheThing()">Send</button>
      <button v-platform="ios" systemButton="Ti.UI.iOS.SystemButton.CAMERA"></button>
      <button v-platform="android">Camera</button>
      <button>Cancel</button>
    </toolbar>
  </base-window>
</template>

<script>
export default {
  methods: {
    sendTheThing() {
      Ti.API.debug('Sending...');
    }
  }
}
</script>
