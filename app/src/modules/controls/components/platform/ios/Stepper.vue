<template>
  <base-window title="Stepper" layout="vertical">
    <input-demo ref="stepperDemo" hint="Use the stepper">
      <stepper maximum="10" tintColor="#4fc08d"/>
    </input-demo>
  </base-window>
</template>

<script>
import InputDemo from '../../input/InputDemo';

console.log(InputDemo);

export default {
  components: {
    InputDemo
  },
  data: function () {
    return {
      stepperValue: 1
    }
  },
  watch: {
    stepperValue(newVal) {
      this.$refs.stepperDemo.state = `Stepper value: ${newVal}`;
    }
  }
}
</script>
