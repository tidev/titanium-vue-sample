<template>
  <label color="#34495e" :font="font"><slot/></label>
</template>

<script>
export default {
  props: {
    fontFamily: {
      type: String
    },
    fontSize: {
      type: [String, Number]
    },
    fontStyle: {
      type: String,
      validator(value) {
        return ['normal', 'italic'].indexOf(value) !== -1;
      }
    },
    fontWeight: {
      type: String
    }
  },
  computed: {
    font() {
      return {
        fontFamily: this.fontFamily,
        fontSize: this.fontSize,
        fontStyle: this.fontStyle,
        fontWeight: this.fontWeight
      }
    }
  }
}
</script>

