<template>
  <div v-clickoutside="actClose">
    <div class="select-wrap" @click='ulShow = !ulShow'>
      <div class="select cursor-point">
        {{ selectVal }}
      </div>
    </div>
    <ul v-show="ulShow" class="mt-2">
      <li v-for="item in list" :key="item" @click="select(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      ulShow: false, // 是否顯示 ul
      selectVal: this.list[0], // 選取的值，態綁定 input 的值
    };
  },

  methods: {
    select(value) {
      this.selectVal = value;
      this.ulShow = false;
      this.$emit('select-value', value);
    },
    actClose() {
      this.ulShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>

  .select-wrap::after {
    content: "";
    border-color: currentColor transparent transparent transparent;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    height: 0;
    width: 0;
    position: absolute;
    transform: translate(65px, -10px);
    cursor: pointer;
  }

  .select {
    position: relative;
    width: 80px;
    font-weight: 600;
  }

  ul {
    width: 100px;
    padding: 8px 0;
    border-radius: 4px;
    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14),
    0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);
    z-index: 1001;

    li {
      padding: 0 10px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    li:hover {
      background-color: darken(#fff, 2%);
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
</style>
