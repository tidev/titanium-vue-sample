<template>
  <base-window title="View" layout="vertical">
    <view v-for="number in [1, 2, 3]" :key="number" height="33%">
      <view backgroundColor="#f8f8f8" left="20" right="20" top="10" bottom="10">
        <label>View {{number}}</label>
      </view>
    </view>
  </base-window>
</template>