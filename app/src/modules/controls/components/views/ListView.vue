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
      customData: [
        {
          icon: {
            text: '\uf309',
            color: "#4fc08d"
          },
          date: {
            text: '13/09/2018 16:23'
          },
          name: {
            text: 'Ann Gray'
          },
          amount: {
            text: '$290.00',
            color: '#4fc08d'
          },
          status: {
            text: 'Complete'
          },
          template: 'custom'
        },
        {
          icon: {
            text: '\uf30c',
            color: "#f66"
          },
          date: {
            text: '13/09/2018 12:53'
          },
          name: {
            text: 'Margo Healts'
          },
          amount: {
            text: '$135.50',
            color: '#f66'
          },
          status: {
            text: 'Complete'
          },
          template: 'custom'
        }
      ]
    }
  }
}
</script>
