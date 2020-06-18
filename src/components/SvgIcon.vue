<template>
  <svg :style="{'width': size, 'height': size}" class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '1em',
    },
  },

  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
  },
};
</script>

<style scoped>
  .svg-icon {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
