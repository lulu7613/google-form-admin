<template>
  <div>
    <div style="position: relative; z-index: 1001;">
      <div
        class="placeholder"
        :class="{
          'small': size === 'small',
          'focus': isFocus,
          'hasData': hasData && !isFocus,
          'error': isError
        }"
        @click="actInputFocus()"
      >
        {{ placeholder }}
      </div>
    </div>
    <div
      class="input-body"
      :class="{
        'small': size === 'small',
        'focus': isFocus,
        'hasData': hasData && !isFocus,
        'error': isError
      }"
    >
      <div v-if="type !== 'email'">
        <input
          ref="input"
          :type="inputType"
          :value="value"
          :placeholder="placeholder"
          @input="$emit('input', $event.target.value)"
          @focus="toggleInput(true)"
          @blur="toggleInput(false)"
        >
      </div>
      <div
        v-if="type === 'email'"
        class="d-flex email-input"
      >
        <input
          style="border: 0"
          ref="input"
          :type="inputType"
          :value="value"
          :placeholder="placeholder"
          @input="$emit('input', $event.target.value)"
          @focus="toggleInput(true)"
          @blur="toggleInput(false)"
        >
        <div class="pr-2" style="align-self: center">
          <slot name="email"></slot>
        </div>
      </div>
      <div
        v-if="showPassIcon"
        ref="pass-icon"
        class="pass-icon cursor-point tooltip"
        :data-tooltip="$t(passTipText, $store.state.lang)"
        @click="actTogglePassIcon"
      >
        <svg-icon v-show="!showPass" icon-class="eye-show" size="25px" />
        <svg-icon v-show="showPass" icon-class="eye-close" size="25px" />
      </div>
      <div
        v-show="isError"
        class="invalid-feedback text-danger"
        :style="{'font-size': errorMsgFz}"
      >
        <span class="mr-1"><svg-icon icon-class="warning" /></span>
        <span>{{ errorMsg }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    size: {
      type: String,
      default: '',
    },
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
    errorMsg: {
      type: String,
      default: '',
    },
    errorMsgFz: {
      type: String,
      default: '.9rem',
    },
    isError: {
      type: Boolean,
      default: false,
    },
    showPassIcon: {
      type: Boolean,
      default: false,
    },
  },

  model: {
    prop: 'value',
    event: 'input',
  },

  computed: {
    inputType() {
      if (this.showPass) {
        return 'text';
      }
      return this.type;
    },
  },

  data() {
    return {
      isFocus: false,
      hasData: false,
      showPass: false,
      passTipText: 'pass_icon_show',
    };
  },

  mounted() {
    this.checkAutoFocus();
  },

  watch: {
    value(value) {
      if (value) {
        this.hasData = true;
      } else {
        this.hasData = false;
      }
    },

    isFocus(value) {
      if (value) {
        this.$refs.input.focus();
      }
    },

    autoFocus(value) {
      if (value) {
        this.isFocus = true;
      }
    },
  },

  methods: {
    toggleInput(boolearn) {
      this.isFocus = boolearn;
    },
    actInputFocus() {
      this.isFocus = true;
    },
    checkAutoFocus() {
      if (this.autoFocus) {
        this.isFocus = true;
      }
    },
    actTogglePassIcon() {
      this.showPass = !this.showPass;

      if (this.showPass) {
        this.passTipText = 'pass_icon_show';
      } else {
        this.passTipText = 'pass_icon_close';
      }
      this.actInputFocus();
    },
  },

};
</script>

<style lang="scss" scoped>
  .placeholder {
    color: #80868b;
    position: absolute;
    top: 18px;
    left: 10px;
    background-color: #fff;
    transition: ease 150ms;
    padding: 0 5px;

    &.focus, &.hasData, &.error {
      transform: translate(-10px, -26px) scale(0.9);
    }
  }

  .placeholder.small {
    top: 7px;
    left: 8px;

    &.focus, &.hasData, &.error {
      transform: translate(-5px, -20px) scale(0.9);
    }
  }

  .focus {
    color: var(--primary-color);
  }
  .hasData {
    color: #80868b;
  }
  .error {
    color: var(--danger-color);
  }


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

    .pass-icon {
      position: absolute;
      color: rgba(0,0,0,0.651);
      right: 10px;
      top: 15px;
    }

    .invalid-feedback {
      display: flex;
      text-align: left;
      margin-top: 5px;
    }

    .email-input {
      border: 1px solid #ccc;
      border-radius: 3px;
    }
}

.input-body.small {
  input {
    padding: 10px 15px;
  }
}

.input-body.focus {
    input, .email-input {
        border: 2px solid var(--primary-color);
    }
}

.input-body.hasData {
    input, .email-input {
        border: 1px solid #ccc;
    }
}

.input-body.error {
    input, .email-input {
        border: 2px solid var(--danger-color);
    }
}
</style>
