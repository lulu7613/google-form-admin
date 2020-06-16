<template>
  <div class="home">
    <div class="mx-auto" style="width: 448px; height: 550px">
      <div class="login-card text-center">
        <span class="logo">Google</span>
        <h1>登入</h1>
        <p>使用您的 Google 帳戶</p>
        <Input
          v-model="account"
          type="text"
          :auto-focus="true"
          placeholder="電子郵件地址或電話"
          class="mt-4"
        />
        <div class="text-left text-primary cursor-point mt-3">忘記電子郵件地址？</div>
        <div
          class="mt-5 text-left"
          style="line-height: 1.7rem;"
        >
          如果這不是你的電腦，請使用訪客模式以私密方式登入。
          <span class="text-primary cursor-point">瞭解詳情</span>
        </div>
        <div class="footer mt-5 d-flex justify-content-between">
          <Popover title="建立帳戶">
            <div @click="test">建立個人帳戶</div>
            <div>建立管理業務帳戶</div>
          </Popover>
          <Button type="primary">繼續</Button>
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
