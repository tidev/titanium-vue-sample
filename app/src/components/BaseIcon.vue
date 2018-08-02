<template>
  <label :font="font" :text="icon"/>
</template>

<script>
const fontFamilyMap = {
  brands: 'FontAwesome5FreeBrandsRegular',
  regular: 'FontAwesome5FreeRegular',
  solid: 'FontAwesome5FreeSolid'
};

export default {
  props: {
    icon: {
      type: String
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: (value) => {
        return [ 'brands', 'regular', 'solid' ].indexOf(value) !== -1;
      }
    },
    fontSize: {
      type: [ Number, String ]
    }
  },
  computed: {
    font: function () {
      return {
        fontFamily: fontFamilyMap[this.iconStyle],
        fontSize: this.fontSize
      }
    }
  }
}
</script>
