<template>
  <base-window title="Activity Indicator" layout="vertical">
    <activity-indicator ref="activityIndicator" top="20" indicatorColor="#2c3e50"/>
    <base-button top="20" @click="doSomeWork()">Do some work!</base-button>
  </base-window>
</template>

<script>
export default {
  name: 'ActivityIndicatorDemo',
  mounted() {
    this.activityIndicator = this.$refs.activityIndicator.titaniumView;
    // style cannot be set in the template because it conflicts Vue's internal inline style binding
    this.activityIndicator.style = Ti.UI.ActivityIndicatorStyle.BIG;
  },
  methods: {
    doSomeWork() {
      this.activityIndicator.show();
      setTimeout(() => {
        this.activityIndicator.hide();
      }, 3000);
    }
  }
}
</script>


