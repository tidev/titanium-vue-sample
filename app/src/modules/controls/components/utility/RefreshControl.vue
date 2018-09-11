<template>
  <base-window title="Refresh Control" layout="vertical">
    <base-info>
      <base-label fontSize="14">Pull down the table view to refresh the currently displayed data. You can use a RefreshControl in TableView, ListView and ScrollView elements.</base-label>
    </base-info>
    <list-view defaultItemTemplate="custom">
      <refresh-control @refreshstart="loadMore($event)" tintColor="#4fc08d"/>
      <item-template name="custom">
        <horizontal-layout height="60">
          <base-icon icon="microphone" left="20" fontSize="32" color="#2c3e50"/>
          <vertical-layout>
            <base-label bindId="name" left="20" top="10"/>
            <base-label bindId="surname" left="20" color="#42b983" fontSize="14"/>
          </vertical-layout>
        </horizontal-layout>
      </item-template>
      <list-section :items="items"/>
    </list-view>
  </base-window>
</template>

<script>
export default {
  data: function () {
    return {
      dataSource: [
        { name: 'JJ', surname: 'Peters' },
        { name: 'Nikita', surname: 'Kamprad' },
        { name: 'Colin', surname: 'Jeffs' },
        { name: 'Einar', surname: 'Selvik' }
      ]
    }
  },
  computed: {
    items() {
      return this.dataSource.map(sourceItem => {
        return {
          name: {
            text: sourceItem.name
          },
          surname: {
            text: sourceItem.surname
          }
        }
      });
    }
  },
  methods: {
    loadMore(e) {
      const self = this;
      setTimeout(function () {
        // You can push new data ...
        self.dataSource.push({ name: 'Michael', surname: 'Roth' });
        // ... or replace the whole data source
        // self.dataSource = [{ name: 'Jordan', surname: 'Dryer' }, { Name: 'Derek', surname: 'Archambault' }]
        e.source.endRefreshing();
      }, 1000);
    }
  }
}
</script>
