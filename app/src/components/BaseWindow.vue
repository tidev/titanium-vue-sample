<template>
  <window
    backgroundColor="#fff"
    ios:barImage="images/transparent.png"
    ios:hideShadow="true"
    ios:navTintColor="#4fc08d"
    :ios:titleAttributes="{ color: '#2c3e50' }"
    ios:translucent="false"
    v-on="$listeners">
    <slot/>
  </window>
</template>
