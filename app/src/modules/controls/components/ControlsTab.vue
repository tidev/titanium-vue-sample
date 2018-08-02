<template>
  <tab title="UI" ios:icon="/images/icons/controls.png">
    <base-window ref="win" layout="vertical">
      <view top="84" height="76" ref="header">
        <view layout="horizontal">
          <label :text="'\uf121'" left="40" color="#2c3e50" :font="{ fontSize: 32, fontFamily: 'FontAwesome5FreeSolid' }"></label>
          <label color="#2c3e50" left="20" :font="{ fontSize: 24, fontWeight: 'bold' }">UI Elements</label>
        </view>
      </view>
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
  </tab>
</template>

<script>
export default {
  name: 'ControlsTab',
  data: function() {
    return {
      items: [
        {
          id: 'views',
          icon: '\uf5fd',
          title: 'Structural Views'
        },
        {
          id: 'inputs',
          icon: '\uf46d',
          title: 'Input Elements'
        },
        {
          id: 'dialogs',
          icon: '\uf24d',
          title: 'Dialogs'
        }
      ]
    }
  },
  mounted() {
    this.$refs.win.$refs.window.titaniumView.hideNavBar({animated: false});
  },
  methods: {
    onItemClick(e) {
      this.$router.push(`/controls/${this.items[e.index].id}`);
    }
  }
}
</script>