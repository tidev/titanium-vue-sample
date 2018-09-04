<template>
  <base-window title="Scrollable View">
    <scrollable-view showPagingControl="true" pageIndicatorColor="#f8f8f8" currentPageIndicatorColor="#42b983">
      <view v-for="card in cards" :key="card.id">
        <vertical-layout :height="Ti.UI.SIZE">
          <view width="50" height="50">
            <base-icon :icon="card.icon" :fontSize="48" color="#42b983"/>
          </view>
          <label top="30" :font="{ fontSize: 24 }" color="#42b983">{{ card.title }}</label>
          <label top="20" color="#34495e">{{ card.text }}</label>
        </vertical-layout>
      </view>
    </scrollable-view>
  </base-window>
</template>

<script>
export default {
  data: function() {
    return {
      cards: [
        {
          id: 1,
          icon: 'angle-double-left',
          title: 'Step 1',
          text: 'Swipe left to continue'
        }, {
          id: 2,
          icon: 'fire',
          title: 'Step 2',
          text: 'Awesome, you got the concept'
        }, {
          id: 3,
          icon: 'thumbs-up',
          title: 'Step 3',
          text: 'That\'s it, now go back!'
        }
      ]
    }
  }
}
</script>
