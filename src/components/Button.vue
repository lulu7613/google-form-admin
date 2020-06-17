<template>
  <button
    ref="btn"
    class="cursor-point"
    :class="`${type}-btn`"
    @click="handleClick"
  >
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },

  data() {
    return {
    };
  },

  watch: {
  },

  methods: {
    handleClick(evt) { // 點擊事件，用 emit 傳給父組件
      this.$emit('click', evt);
    },
  },

};
</script>

<style lang="scss" scoped>
  $primary: #1a73e8;

  button {
    border: 0;
    outline-style: none; // focus 外边框
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 1rem;
    letter-spacing: .25px;
    padding: 10px 25px;
    position: relative;
    overflow: hidden;
  }

  button:after {
    content: "";
    background-color: darken($primary, 10%);
    border-radius: 4px;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s
  }

  button:active:after {
    width: 50%;
    left: 30%;
    opacity: .5;
    transition: 0s;
  }

  .text-btn {
    background-color: #fff;
    color: var(--primary-color);
  }

  .primary-btn {
    background-color: var(--primary-color);
    color: #fff;

    &:hover {
      background-color: darken($primary, 3%);
      box-shadow: 0 1px 1px 0 rgba(66,133,244,0.45), 0 1px 3px 1px rgba(66,133,244,0.3);
    }

    // &:focus {
    //   background-color: darken($primary, 10%);
    //   animation: btn .5s;
    //   box-shadow: 0 1px 1px 0 rgba(66,133,244,0.45), 0 1px 3px 1px rgba(66,133,244,0.3);
    // }
  }

  // @keyframes btn {
  //   from {
  //     background-color: darken($primary, 0);
  //   }

  //   to {
  //     background-color: darken($primary, 10%);
  //   }
  // }
</style>
