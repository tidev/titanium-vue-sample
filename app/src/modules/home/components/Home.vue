<template>
  <base-tab-group>
      <controls-tab></controls-tab>
  </base-tab-group>
</template>

<script>
import { ControlsTab } from  '@modules/controls';

export default {
  name: 'Home',
  components: {
      ControlsTab
  }
}
</script>