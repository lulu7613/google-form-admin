<template>
  <div>
    <Input
      v-model="pass"
      type="password"
      :showPassIcon="true"
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
      <Button type="primary" @click="redirectAdminPage">
        {{ $t('next', $store.state.lang) }}
      </Button>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';

export default {
  name: 'Pass',

  components: {
    Input,
  },

  mounted() {
    this.checkStoreUserAccount();
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
    redirectAdminPage() {
      const password = this.pass;

      if (!password) {
        this.isError = true;
        this.error_msg_i18n = 'pass_no_pass_error';
        return;
      }

      this.$router.push('/admin')
    },

    checkStoreUserAccount() {
      const account = this.$store.state.user_account;

      if (!account) {
        this.$router.push('/login');
      }
    },
  },

};
</script>

<style lang="scss" scoped>
</style>
