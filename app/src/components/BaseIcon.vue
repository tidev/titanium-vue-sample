<template>
  <label :font="font" :text="unicodeValue"/>
</template>

<script>
const fontFamilyMap = {
  brands: 'FontAwesome5BrandsRegular',
  regular: 'FontAwesome5FreeRegular',
  solid: 'FontAwesome5FreeSolid'
};

const iconMap = {
  brands: {
    'android': 'f17b',
    'apple': 'f179'
  },
  regular: {

  },
  solid: {
    'angle-double-left': 'f100',
    'arrow-down': 'f063',
    'clipboard-list': 'f46d',
    'clone': 'f24d',
    'code': 'f121',
    'cogs': 'f085',
    'comment-alt': 'f27a',
    'exchange-alt': 'f362',
    'fill-drip': 'f576',
    'fire': 'f06d',
    'flask': 'f0c3',
    'heart': 'f004',
    'layer': 'f5fd',
    'long-arrow-alt-down': 'f309',
    'long-arrow-alt-up': 'f30c',
    'magic': 'f0d0',
    'microphone': 'f130',
    'minus': 'f068',
    'search': 'f002',
    'spinner': 'f110',
    'sync-alt': 'f2f1',
    'thumbs-up': 'f164',
    'user-circle': 'f2bd'
  }
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
    },
    unicodeValue: function () {
      if (!this.icon) {
        return '';
      }

      if (!iconMap[this.iconStyle] || !iconMap[this.iconStyle][this.icon]) {
        Ti.API.warn(`FontAwesome style "${this.iconStyle}" has no icon named "${this.icon}"`);
        return '';
      }

      return String.fromCharCode(parseInt(iconMap[this.iconStyle][this.icon], 16));
    }
  }
}
</script>
