<template>
  <tab title="UI" ios:icon="/images/icons/controls.png">
    <base-window ref="win" layout="vertical">
      <view v-platform="ios" top="84" :height="Ti.UI.SIZE">
        <view layout="horizontal" :height="Ti.UI.SIZE">
          <base-icon left="40" color="#2c3e50" icon="code" fontSize="32"></base-icon>
          <label color="#2c3e50" left="20" :font="{ fontSize: 24, fontWeight: 'bold' }">
            UI Elements
          </label>
        </view>
      </view>
      <table-view top="30" @click="onItemClick" :separatorStyle="Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE" :ios:selectionStyle="Ti.UI.iOS.TableViewCellSelectionStyle.NONE">
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
  </tab>
</template>

<script>
import { device } from 'titanized';

export default {
  name: 'ControlsTab',
  data: function() {
    return {
      items: [
        {
          id: 'views',
          icon: 'layer',
          title: 'Structural Views'
        }, {
          id: 'inputs',
          icon: 'clipboard-list',
          title: 'Input Elements'
        }, {
          id: 'utility',
          icon: 'cogs',
          title: 'Utility Views'
        }, {
          id: 'platform',
          icon: 'flask',
          title: 'Platform'
        }, {
          id: 'dialogs',
          icon: 'clone',
          title: 'Dialogs'
        }
      ]
    }
  },
  mounted() {
    if (device.runs('ios')) {
      this.$refs.win.$titaniumView.hideNavBar({animated: false});
    }
  },
  methods: {
    onItemClick(e) {
      this.$router.push(`/controls/${this.items[e.index].id}`);
    }
  }
}
</script>