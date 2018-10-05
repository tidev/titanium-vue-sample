<template>
    <view height="70">
        <image-view @click="onProfileClick" bindId="profileImage" top="10" left="20" width="50" borderRadius="25"></image-view>
        <vertical-layout top="12" left="80" right="60">
            <label bindId="name" left="0"></label>
            <label bindId="preview" left="0" right="0" maxLines="1" color="#6e6e6e"></Label>
        </vertical-layout>
        <vertical-layout top="12" right="10" width="50">
            <label bindId="time" top="2" color="#6e6e6e"></label>
            <view bindId="newMessagesBadge" top="5" width="20" height="20" backgroundColor="#8BC34A" borderRadius="10">
                <label bindId="newMessagesBadgeText" color="white"></label>
            </view>
        </vertical-layout>
    </view>
</template>

<script>
export default {
    name: 'Item'
}
</script>

