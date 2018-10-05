<template>
  <base-window title="Platform" layout="vertical">
    <table-view @click="onItemClick" :separatorStyle="Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE" :ios:selectionStyle="Ti.UI.iOS.TableViewCellSelectionStyle.NONE">
      <table-view-row className="item" v-for="item in items" :key="item.id" :hasChild="true">
        <view height= "75" layout="horizontal">
          <view width="50" left="10">
            <base-icon color="#42b983" :fontSize="24" :icon="item.icon"></base-icon>
          </view>
          <label left="20" color="#7f8c8d">{{item.title}}</label>
        </view>
      </table-view-row>
    </table-view>
  </base-window>
</template>

<script>
export default {
  name: 'PlatformyViews',
  data: function () {
    return {
      items: [
        {
          id: 'blur-view',
          icon: 'magic',
          title: 'Blur View'
        }, {
          id: 'button-bar',
          icon: 'minus',
          title: 'Button Bar'
        }, {
          id: 'stepper',
          icon: 'exchange-alt',
          title: 'Stepper'
        }
      ]
    }
  },
  methods: {
    onItemClick(e) {
      this.$router.push(`/controls/platform/${this.items[e.index].id}`);
    }
  }
}
</script>
