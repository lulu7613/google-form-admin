<template>
  <div>
    <Input
      v-model="account"
      type="text"
      :auto-focus="true"
      :placeholder="$t('login_placeholder', $store.state.lang)"
      :isError="isError"
      :errorMsg="$t(error_msg_i18n, $store.state.lang)"
      class="mt-4"
    />
    <div class="text-left text-primary cursor-point mt-3">
      {{ $t('login_forgot', $store.state.lang) }}
    </div>
    <div
      class="mt-5 text-left"
      style="line-height: 1.7rem;"
    >
      {{ $t('login_message', $store.state.lang) }}
      <span class="text-primary cursor-point">
        {{ $t('login_learn_more', $store.state.lang) }}
      </span>
    </div>
    <div class="footer mt-5 d-flex justify-content-between">
      <Popover :title="$t('login_create', $store.state.lang)">
        <div @click="test">{{ $t('login_create', $store.state.lang) }}</div>
        <div>{{ $t('login_create_manage', $store.state.lang) }}</div>
      </Popover>
      <Button type="primary" @click="redirectPassPage">
        {{ $t('next', $store.state.lang) }}
      </Button>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';

export default {
  name: 'Login',

  components: {
    Input,
    Button,
    Popover,
  },

  data() {
    return {
      account: '',
      error_msg_i18n: '',
      isError: false,
      emailRule: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
      phoneRule: /^09[0-9]{8}$/,
    };
  },

  watch: {
  },

  methods: {
    test() {
      console.log(111111);
    },
    redirectPassPage() {
      const acc = this.account;

      if (!acc) {
        this.isError = true;
        this.error_msg_i18n = 'login_no_acc_error';
        return;
      }

      if (!this.emailRule.test(acc) && !this.phoneRule.test(acc)) {
        this.isError = true;
        this.error_msg_i18n = 'login_regExp_error';
        return;
      }

      this.$router.push(`/pass/${acc}`);
    },
  },

};
</script>
