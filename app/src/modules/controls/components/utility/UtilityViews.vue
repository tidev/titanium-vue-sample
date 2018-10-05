<template>
  <base-window title="Utilities" layout="vertical">
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
  name: 'UtilityViews',
  data: function () {
    return {
      items: [
        {
          id: 'progress-indicators',
          icon: 'spinner',
          title: 'Progress Indicators'
        }, {
          id: 'masked-image',
          icon: 'fill-drip',
          title: 'Masked Image'
        }, {
          id: 'refresh-control',
          icon: 'sync-alt',
          title: 'Refresh Control'
        }, {
          id: 'search-bar',
          icon: 'search',
          title: 'Search Bar'
        }, {
          id: 'toolbar',
          icon: 'clone',
          title: 'Toolbar'
        }
      ]
    }
  },
  methods: {
    onItemClick(e) {
      this.$router.push(`/controls/utility/${this.items[e.index].id}`);
    }
  }
}
</script>
