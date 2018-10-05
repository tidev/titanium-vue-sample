<template>
  <base-window title="List View">
    <list-view>
      <item-template name="custom">
        <horizontal-layout height="65">
          <base-icon bindId="icon" left="24" fontSize="32" width="42" :textAlign="Ti.UI.TEXT_ALIGNMENT_CENTER"/>
          <view layout="vertical" :width="Ti.UI.SIZE">
            <label bindId="date" top="10" left="10"  color="#7f8c8d" :font="{ fontSize: 14 }"/>
            <label bindId="name" top="5" left="10"/>
          </view>
          <view layout="vertical">
            <label bindId="amount" top="10" right="20" :font="{ fontSize: 14 }"/>
            <label bindId="status" top="5" right="20"/>
          </view>
        </horizontal-layout>
      </item-template>
      <list-section headerTitle="System Item Templates" :items="systemTemplates"/>
      <list-section headerTitle="Custom Item Templates" :items="customData"/>
      <list-section headerTitle="Accessory Types" :items="accessoryTypes"/>
      <list-section>
        <view slot="headerView" backgroundColor="#fff">
          <label left="20" height="30" color="#2c3e50" :font="{ fontWeight: 'bold' }">Custom Header</label>
        </view>
        <list-item :item="{ properties: { title: 'Custom header and footer views' } }"/>
        <view slot="footerView" backgroundColor="#fff">
          <label left="20" height="30" color="#2c3e50" :font="{ fontWeight: 'bold' }">Custom footer</label>
        </view>
      </list-section>
    </list-view>
  </base-window>
</template>

<script>
export default {
  name: 'ListViewDemo',
  data: () => {
    return {
      systemTemplates: [
        { properties: { title: 'Default' } },
        { properties: { title: 'Default with image', image: '/images/vuejs.png' } },
        { properties: { title: 'Subtitle', subtitle: 'Subtitle' }, template: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE },
        { properties: { title: 'Subtitle with image', image: '/images/vuejs.png', subtitle: 'Subtitle' }, template: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE },
        { properties: { title: 'Settings', subtitle: 'Subtitle' }, template: Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS },
        { properties: { title: 'Settings with image', image: '/images/vuejs.png', subtitle: 'Subtitle' }, template: Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS },
        { properties: { title: 'Contact', subtitle: 'Subtitle' }, template: Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS },
      ],
      accessoryTypes: [
        { properties: { title: 'None' } },
        { properties: { title: 'Disclosure', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE } },
        { properties: { title: 'Detail', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DETAIL } },
        { properties: { title: 'Checkmark', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK } },
      ],
      customDataSource: [
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
  computed: {
    customData: function() {
      return this.customDataSource.map(item => {
        return {
          icon: {
            text: this.iconForType(item.type),
            color: this.colorForType(item.type)
          },
          date: {
            text: item.date
          },
          name: {
            text: item.name
          },
          amount: {
            text: item.amount,
            color: this.colorForType(item.type)
          },
          status: {
            text: item.status
          },
          template: 'custom'
        }
      });
    }
  },
  methods: {
    iconForType(transactionType) {
      return transactionType === 'deposit' ? '\uf309' : '\uf30c';
    },
    colorForType(transactionType) {
      return transactionType === 'deposit' ? '#4fc08d' : '#f66';
    }
  }
}
</script>
