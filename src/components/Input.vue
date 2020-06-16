<template>
    <div class="input-body" :class="{'focus': isFocus, 'hasData': hasData && !isFocus}">
        <input
            ref="input"
            :type="type"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            @focus="toggleInput(true)"
            @blur="toggleInput(false)"
        >
        <div
            class="placeholder"
            @click="actInputFocus()"
        >
            {{ placeholder }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
      // https://www.haorooms.com/post/vue_vmodel vue中v-model等父子组件通信
      // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
    },
    placeholder: {
      type: String,
      default: '',
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },

  model: {
    prop: 'value',
    event: 'input',
  },

  data() {
    return {
      isFocus: false,
      hasData: false,
    };
  },

  mounted() {
    this.actAutoFocus();
  },

  watch: {
    value(value) {
      if (value) {
        this.hasData = true;
      } else {
        this.hasData = false;
      }
    },
  },

  methods: {
    toggleInput(boolearn) {
      this.isFocus = boolearn;
    },
    actInputFocus() {
      this.$refs.input.focus();
    },
    actAutoFocus() {
      if (this.autoFocus) {
        this.$refs.input.focus();
      }
    },
  },

};
</script>

<style lang="scss" scoped>
.input-body {
    position: relative;

    input {
        box-sizing: border-box;
        outline-style: none; // focus 外边框
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
        padding: 18px 15px;

        &::-webkit-input-placeholder {
            opacity: 0;
        }
    }

    .placeholder {
        color: #80868b;
        position: absolute;
        bottom: 17px;
        left: 8px;
        background-color: #fff;
        transition: ease 150ms;
        padding: 0 5px;
    }
}

.input-body.focus {
    input {
        border: 2px solid var(--primary-color);
    }

    .placeholder {
        color: var(--primary-color);
        transform: translate(-10px, -28px) scale(0.9);
    }
}

.input-body.hasData {
    input {
        border: 1px solid #ccc;
    }

    .placeholder {
        color: #80868b;
        transform: translate(-10px, -28px) scale(0.9);
    }
}
</style>
