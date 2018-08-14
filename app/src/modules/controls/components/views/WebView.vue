<template>
  <base-window title="Web View">
      <web-view url="https://www.appcelerator.com" @load="Ti.API.info('WebView content loaded')"/>
  </base-window>
</template>
