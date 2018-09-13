<template>
  <base-window title="Structural Views">
    <table-view @click="onItemClick" :separatorStyle="Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE" :ios:selectionStyle="Ti.UI.iOS.TableViewCellSelectionStyle.NONE">
        <table-view-row className="item" v-for="item in items" :key="item.id" :hasChild="true">
          <view height= "75" layout="horizontal">
            <view width="50" left="20">
              <label color="#42b983" :font="{ fontSize: 24, fontFamily: 'FontAwesome5FreeSolid' }">{{item.icon}}</label>
            </view>
            <label left="20" color="#7f8c8d">{{item.title}}</label>
          </view>
        </table-view-row>
      </table-view>
  </base-window>
</template>

<script>
export default {
  name: 'StructuralViews',
  data: function() {
    return {
      items: [
        {
          id: 'view',
          icon: '\uf5fd',
          title: 'View'
        },
        {
          id: 'image-view',
          icon: '\uf03e',
          title: 'Image View'
        },
        {
          id: 'list-view',
          icon: '\uf03a',
          title: 'List View'
        },
        {
          id: 'table-view',
          icon: '\uf022',
          title: 'Table View'
        },
        {
          id: 'scroll-view',
          icon: '\uf338',
          title: 'Scroll View'
        },
        {
          id: 'scrollable-view',
          icon: '\uf141',
          title: 'Scrollable View'
        },
        {
          id: 'web-view',
          icon: '\uf57d',
          title: 'Web View'
        }
      ]
    }
  },
  methods: {
    onItemClick(e) {
      this.$router.push(`/controls/views/${this.items[e.index].id}`);
    }
  }
}
</script>