<template>
  <div>
    <div class="mx-auto" style="width: 448px; height: 550px">
      <div class="card text-center">
        <span class="logo">Google</span>
        <h1>{{ $t('pass_title', $store.state.lang) }}</h1>
        <div ref="tag" class="tag mx-auto px-3 py-1" @click="redirectLoginPage">
          {{ account | showStyle }}
        </div>
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
      <FooterBar />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'Pass',

  components: {
    Input,
    Button,
    FooterBar,
  },

  data() {
    return {
      account: this.$route.params.id,
      pass: '',
      isError: false,
      error_msg_i18n: '',
    };
  },

  filters: {
    showStyle(value) {
      const regExp = /[0-9]{10}/; // 檢驗是否為手機號碼

      if (!regExp.test(value)) {
        return value;
      }
      return value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    },
  },

  methods: {
    redirectLoginPage() {

    },
    redirectRootPage() {
      const pass = this.pass;

      if (!pass) {
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
