<template>
  <window backgroundColor="white" layout="vertical">
    <view height="300">
      <view layout="horizontal">
        <view width="50%">
          <image-view image="images/vuejs.png"></image-view>
        </view>
        <view width="50%">
          <label :font="{ fontSize: 32 }" color="#34495e">Now on Titanium</label>
        </view>
      </view>
    </view>
    <view height="200">
      <view backgroundColor="#f8f8f8" top="5" left="40" right="40" bottom="5">
        <view layout="vertical" top="10" left="10" right="10" bottom="10">
          <label top="5" textAlign="center" color="#34495e" :font="{ fontSize: 18, fontWeight: 'bold' }">Titanium Vue</label>
          <label top="15" color="#34495e">{{ message }}</label>
        </view>
      </view>
    </view>
    <view>
      <button :title="title" @click="onClick" bottom="40" color="#fff" backgroundColor="#4fc08d" height="40" width="160" borderRadius="20"></button>
    </view>
  </window>
</template>

<script>
export default {
  name: 'Intro',
  data: function() {
    return {
      title: 'LET\'S GO!',
      message: 'Welcome to the Titanium Vue demo app!'
    }
  },
  methods: {
    onClick() {
      this.$router.push('/');
    }
  }
}
</script>