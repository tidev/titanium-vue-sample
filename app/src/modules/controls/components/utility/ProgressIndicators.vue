<template>
  <base-window title="Progress Indicators" layout="vertical">
    <view :height="Ti.UI.SIZE" layout="vertical">
      <base-label fontWeight="bold" left="20">Activity Indicator</base-label>
      <activity-indicator ref="activityIndicator" message="Checking for updates" top="20" indicatorColor="#2c3e50"/>
      <base-button top="20" @click="checkForUpdates()">Check for updates!</base-button>
    </view>
    <view top="40" layout="vertical">
      <base-label fontWeight="bold" left="20">Progress Bar</base-label>
      <view top="10" left="20" right="20" :height="Ti.UI.SIZE" layout="vertical">
        <view :height="Ti.UI.SIZE">
          <base-label left="0" fontSize="14">Some file to download</base-label>
          <base-label ref="downloadState" right="0" fontSize="14" color="#7f8c8d">{{downloadState}}</base-label>
        </view>
        <progress-bar ref="progressBar" top="10" width="100%" min="0" max="100" tintColor="#4fc08d" trackTintColor="#f5f5f5"></progress-bar>
        <base-label top="10" left="0" fontSize="12" color="#7f8c8d">{{bytesLoaded | formatBytes}} of {{bytesTotal | formatBytes}} </base-label>
      </view>
      <base-button top="20" @click="downloadStuff()">Start download</base-button>
    </view>
  </base-window>
</template>

<script>
export default {
  name: 'ProgressIndicatorDemo',
  data: function () {
    return {
      bytesLoaded: 0,
      bytesTotal: 33458326,
      downloadState: 'Idle'
    }
  },
  mounted() {
    this.activityIndicator = this.$refs.activityIndicator.titaniumView;
    // style cannot be set in the template because it conflicts Vue's internal inline style binding
    // this.activityIndicator.style = Ti.UI.ActivityIndicatorStyle.BIG;

    this.progressBar = this.$refs.progressBar.titaniumView;
  },
  filters: {
    formatBytes(bytes) {
      if(bytes == 0) {
        return '0 Bytes';
      }

      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
  },
  methods: {
    checkForUpdates() {
      if (this.updateTimeout) {
        return;
      }

      this.activityIndicator.show();
      // Do some unquantifiable task
      this.updateTimeout = setTimeout(() => {
        this.activityIndicator.hide();
        clearTimeout(this.updateTimeout);
      }, 3000);
    },
    downloadStuff() {
      if (this.downloadInterval) {
        return;
      }

      // Do your task with known duration or which is otherwise quantifiable
      this.bytesLoaded = 0;
      this.downloadState = 'Downloading';
      this.downloadInterval = setInterval(() => {
        const incomingBytes = 200000;
        if (this.bytesLoaded + incomingBytes < this.bytesTotal) {
          this.bytesLoaded += incomingBytes;
        } else {
          this.bytesLoaded = this.bytesTotal;
          this.downloadState = 'Done';
          clearInterval(this.downloadInterval);
          this.downloadInterval = null;
        }
        this.progressBar.value = this.bytesLoaded / this.bytesTotal * 100;
      }, 50);
    }
  }
}
</script>


