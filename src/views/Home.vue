<template>
  <div class="home">
    <div class="mx-auto" style="width: 448px; height: 550px">
      <div class="login-card text-center">
        <span class="logo">Google</span>
        <h1>{{ $t('login_sign_in', $store.state.lang) }}</h1>
        <p>{{ $t('login_title', $store.state.lang) }}</p>
        <Input
          v-model="account"
          type="text"
          :auto-focus="true"
          :placeholder="$t('login_account', $store.state.lang)"
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
          <Button type="primary">{{ $t('login_next', $store.state.lang) }}</Button>
        </div>
      </div>
      <FooterBar />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Popover from '@/components/Popover.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'Home',

  components: {
    Input,
    Button,
    Popover,
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
    actClick() {
    },
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
