<template>
  <div class="home">
    <div class="login-card mx-auto">
      <span class="logo">Google</span>
      <h1>登入</h1>
      <p>使用您的 Google 帳戶</p>
      <Input v-model="account" type="text" placeholder="電子郵件地址或電話" />
      <div class="footer">
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';

export default {
  name: 'Home',

  components: {
    Input,
  },

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
