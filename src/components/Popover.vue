<template>
  <div class="popover">
    <Button type="text" @click="actAlert">{{ title }}</Button>
    <div v-show="isShow" class="content text-left" v-clickoutside="actCloseAlert">
      <slot>123</slot>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Popover',

  components: {
    Button,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    actAlert() {
      this.isShow = !this.isShow;
    },
    actCloseAlert() {
      this.isShow = false;
    },
  },

};
</script>

<style lang="scss" scoped>
  $primary: #1a73e8;

  .popover {
    position: relative;
  }
  .content {
    position: fixed;
    padding: 10px 0;
    border-radius: 4px;
    transform: translateX(25px);
    background-color: #fff;
    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12),
    0 5px 5px -3px rgba(0,0,0,0.2);

    div {
      padding: 15px 25px;
      cursor: pointer;

      &:hover {
        background-color: darken(#fff, 2%);
      }
    }
  }
</style>
