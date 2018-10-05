<template>
  <base-window title="Table View" layout="vertical">
    <base-info>
      <label color="#34495e" :font="{ fontSize: 14 }">
        A TableView allows you to use the dynamic component features of Vue.js at the cost of performance. Consider using a ListView of you are working with huge data sets.
      </label>
    </base-info>
    <table-view :ios:selectionStyle="Ti.UI.iOS.TableViewCellSelectionStyle.NONE">
      <table-view-section>
        <view slot="headerView" height="40" backgroundColor="#fff">
          <label left="20" bottom="10" color="#2c3e50" :font="{ fontWeight: 'bold' }">Custom cell</label>
        </view>
        <table-view-row v-for="item in items" :key="item.id">
          <horizontal-layout height="65">
            <base-icon :icon="iconForType(item.type)" :color="colorForType(item.type)" left="24" fontSize="32" width="42" :textAlign="Ti.UI.TEXT_ALIGNMENT_CENTER"/>
            <view layout="vertical" :width="Ti.UI.SIZE">
              <label top="10" left="10" color="#7f8c8d" :font="{ fontSize: 14 }">{{item.date}}</label>
              <label top="5" left="10">{{item.name}}</label>
            </view>
            <view layout="vertical">
              <label top="10" right="20" :color="colorForType(item.type)" :font="{ fontSize: 14 }">{{item.amount}}</label>
              <label top="5" right="20">{{item.status}}</label>
            </view>
          </horizontal-layout>
        </table-view-row>
      </table-view-section>
      <table-view-section>
        <view slot="headerView" height="40" backgroundColor="#fff">
          <label left="20" bottom="10" color="#2c3e50" :font="{ fontWeight: 'bold' }">Accessory Types</label>
        </view>
        <table-view-row title="None"></table-view-row>
        <table-view-row title="Disclosure" hasChild="true"></table-view-row>
        <table-view-row title="Detail" hasDetail="true"></table-view-row>
        <table-view-row title="Checkmark" hasCheck="true"></table-view-row>
      </table-view-section>
    </table-view>
  </base-window>
</template>

<script>
export default {
  name: 'TableViewDemo',
  data: function () {
    return {
      items: [
        {
          id: 1,
          type: 'deposit',
          date: '13/09/2018 16:23',
          name: 'Ann Gray',
          amount: '$290.00',
          status: 'Complete'
        }, {
          id: 2,
          type: 'withdrawl',
          date: '13/09/2018 12:53',
          name: 'Margo Healts',
          amount: '$135.50',
          status: 'Complete'
        }
      ]
    }
  },
  methods: {
    iconForType(transactionType) {
      return transactionType === 'deposit' ? 'long-arrow-alt-down' : 'long-arrow-alt-up';
    },
    colorForType(transactionType) {
      return transactionType === 'deposit' ? '#4fc08d' : '#f66';
    }
  }
}
</script>
