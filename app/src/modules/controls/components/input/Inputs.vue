<template>
  <base-window title="Input Elements">
    <scroll-view layout="vertical">
      <input-demo ref="switchDemo" name="Switch" hint="Tap the switch">
        <switch v-model="switchValue" right="20" ios:onTintColor="#4fc08d"/>
      </input-demo>

      <input-demo ref="sliderDemo" name="Slider" hint="Move the slider">
        <slider v-model="sliderValue" min="0" max="100" ios:tintColor="#4fc08d"/>
      </input-demo>

      <input-demo ref="buttonDemo" name="Button" hint="Tap the button">
        <base-button @click="onSubmit">Submit</base-button>
      </input-demo>

      <input-demo ref="textFieldDemo" name="Text Field">
        <text-field v-model="textFieldValue" left="0" hintText="Enter some text"/>
      </input-demo>

      <input-demo ref="textAreaDemo" name="Text Area" hint="Enter some text">
        <vertical-layout :height="Ti.UI.SIZE">
          <text-area left="0" right="0" height="50" v-model="textAreaValue" hintText="Enter some text"></text-area>
          <label height="50" backgroundColor="red">{{textAreaValue}}</label>
        </vertical-layout>
      </input-demo>
    </scroll-view>
  </base-window>
</template>

<script>
import InputDemo from './InputDemo';

export default {
  name: 'Inputs',
  components: {
    InputDemo
  },
  data: () => {
    return {
      switchValue: false,
      sliderValue: 25,
      textFieldValue: '',
      textAreaValue: ''
    }
  },
  watch: {
    switchValue(newVal) {
      this.$refs.switchDemo.state = `Switch is now ${newVal ? 'On' : 'Off'}`;
    },
    sliderValue(newVal) {
      this.$refs.sliderDemo.state = `Slider value: ${newVal.toFixed(0)}`;
    },
    textFieldValue(newVal) {
      this.$refs.textFieldDemo.state = newVal !== '' ? `Text: ${newVal}` : '';
    }
  },
  methods: {
    onSubmit() {
      this.$refs.buttonDemo.state = 'Nicely done!'
    }
  }
}
</script>

