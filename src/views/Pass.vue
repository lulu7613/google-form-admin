<template>
  <div>
    <div class="mx-auto" style="width: 448px; height: 550px">
      <div class="login-card text-center">
        <span class="logo">Google</span>
        <h1>{{ $t('pass_title', $store.state.lang) }}</h1>
        <Input
          v-model="account"
          type="text"
          :auto-focus="true"
          :placeholder="$t('pass_placeholder', $store.state.lang)"
          class="mt-4"
        />
        <div class="footer mt-5 d-flex justify-content-between">
          <div class="text-left text-primary cursor-point mt-3">
            {{ $t('pass_forgot', $store.state.lang) }}
          </div>
          <Button type="primary">
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
  name: 'Home',

  components: {
    Input,
    Button,
    FooterBar,
  },

  data() {
    return {
      account: '',
    };
  },

  watch: {
  },

  methods: {
    test() {
      console.log(111111);
    },
  },

};
</script>

<style lang="scss" scoped>
.login-card {
    width: 100%;
    height: 500px;
    padding: 48px 40px 36px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 20vh;

    .logo {
        font-size: 1.8rem;
    }

    h1 {
        font-size: 1.5rem;
    }
}
</style>
