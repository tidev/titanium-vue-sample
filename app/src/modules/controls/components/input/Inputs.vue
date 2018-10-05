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

      <input-demo ref="pickerDemo" name="Picker" hint="Choose a date">
        <picker v-model="pickerValue" :type="Ti.UI.PICKER_TYPE_DATE" width="100%"/>
      </input-demo>

      <input-demo ref="textFieldDemo" name="Text Field">
        <text-field v-model="textFieldValue" left="0" hintText="Enter some text" ios:backgroundColor="#f5f5f5" ios:height="40" ios:borderRadius="10" :ios:padding="{ right: 8, left: 8 }"/>
      </input-demo>

      <input-demo ref="textAreaDemo" name="Text Area" hint="Enter some text">
        <vertical-layout :height="Ti.UI.SIZE">
          <text-area left="0" right="0" height="100" v-model="textAreaValue" hintText="Enter some text" ios:backgroundColor="#f5f5f5" ios:borderRadius="10" :ios:padding="{ top: 12, right: 8, bottom: 12, left: 8 }"></text-area>
          <label height="50">{{textAreaValue}}</label>
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
      pickerValue: new Date(),
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
    pickerValue(newVal) {
      this.$refs.pickerDemo.state = newVal.toLocaleDateString('en-US');
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
