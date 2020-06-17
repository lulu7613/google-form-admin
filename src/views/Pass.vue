<template>
  <div>
    <Input
      v-model="pass"
      type="text"
      :auto-focus="true"
      :placeholder="$t('pass_placeholder', $store.state.lang)"
      :isError="isError"
      :errorMsg="$t(error_msg_i18n, $store.state.lang)"
      class="mt-4"
    />
    <div class="footer mt-5 d-flex justify-content-between">
      <div class="text-left text-primary cursor-point mt-3">
        {{ $t('pass_forgot', $store.state.lang) }}
      </div>
      <Button type="primary" @click="redirectRootPage">
        {{ $t('next', $store.state.lang) }}
      </Button>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Pass',

  components: {
    Input,
    Button,
  },

  data() {
    return {
      account: this.$route.params.id,
      pass: '',
      isError: false,
      error_msg_i18n: '',
    };
  },

  methods: {
    redirectLoginPage() {

    },
    redirectRootPage() {
      const password = this.pass;

      if (!password) {
        this.isError = true;
        this.error_msg_i18n = 'pass_no_pass_error';
        return;
      }
    },
  },

};
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'Google Sans';
    src: url('~@/assets/font/GoogleSans-Bold.ttf');
  }

  .tag {
    box-sizing: border-box;
    width: fit-content;
    border: 1px solid #ccc;
    border-radius: 16px;
    font-family: 'Google Sans',arial,sans-serif;
    cursor: pointer;

    &:active {
      border: 1px solid #333;
      background-color: #bfc2c2;
    }
  }
</style>
