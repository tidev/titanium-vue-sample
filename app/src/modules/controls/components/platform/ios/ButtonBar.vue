<template>
  <base-window title="Button Bar" layout="vertical">
    <base-label left="20" top="10" fontWeight="bold">Simple labels</base-label>
    <button-bar @click="doSomething($event)" top="20" tintColor="#4fc08d" :labels="[ 'One', 'Two', 'Three' ]"></button-bar>

    <base-label left="20" top="20" fontWeight="bold">Advanced configuration</base-label>
    <button-bar top="20" tintColor="#4fc08d" :labels="[ 'One', { image: '/images/icons/tab.png', width: 100 }, { enabled: false, title: 'Three' } ]"></button-bar>

    <base-label left="20" top="20" fontWeight="bold">Tabbed bar (maintains state)</base-label>
    <tabbed-bar top="20" tintColor="#4fc08d" :labels="[ 'One', 'Two', 'Three' ]"></tabbed-bar>
  </base-window>
</template>

<script>
export default {
  methods: {
    doSomething(e) {
      Ti.API.info(`Clicked button with index ${e.index}`);
    }
  }
}
</script>
