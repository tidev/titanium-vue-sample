<template>
  <base-window title="Search Bar">
    <list-view backgroundColor="#fff" ref="listView" defaultItemTemplate="fruit">
      <item-template name="fruit">
        <view height="60">
          <base-label left="20" bindId="name"/>
        </view>
      </item-template>
      <list-section>
        <list-item v-for="(item, index) in items" :item="item" :key="index"></list-item>
      </list-section>
    </list-view>
  </base-window>
</template>

<script>
export default {
  data: function () {
    return {
      names: [
        'Sebastian',
        'Alexandra',
        'Alexej',
        'Nina',
        'Tobi'
      ]
    }
  },
  computed: {
    items() {
      return this.names.map(name => {
        return {
          name: { text: name },
          properties: {
            searchableText: name
          }
        }
      });
    }
  },
  mounted() {
    // @todo apply proper styling to match the rest of the app
    this.$refs.listView.$titaniumView.searchView = Ti.UI.createSearchBar({
      backgroundImage: '/images/transparent.png'
    });
  }
}
</script>
