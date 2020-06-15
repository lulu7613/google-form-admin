<template>
  <div class="home">
    <div class="login-card mx-auto">
      <span class="logo">Google</span>
      <h1>登入</h1>
      <p>使用您的 Google 帳戶</p>
      <div class="login-input" :class="{'focus': isFocus, 'hasData': hasData && !isFocus}">
        <input
          ref="login"
          class="login-input"
          type="text"
          v-model="account"
          placeholder="電子郵件地址或電話號碼"
          @focus="toggleInput(true)"
          @blur="toggleInput(false)"
        >
        <div
          class="placeholder"
          @click="actInputFocus()"
        >
          電子郵件地址或電話
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      account: '',
      isFocus: false,
      hasData: false,
    };
  },

  watch: {
    account(value) {
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
      this.$refs.login.focus();
    },
  },

};
</script>
