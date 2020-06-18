<template>
  <div class="create">
    <div class="mx-auto" style="width: 748px; height: 510px">
      <div class="card text-center d-flex justify-content-between">
        <div class="text-left" style="width: 55%;">
          <div class="logo">Google</div>
          <h1>建立您的 Google 帳戶</h1>
          <div class="mt-4">
            <div class="d-flex justify-content-between">
              <div style="width: 48%">
                <Input
                  size="small"
                  type="text"
                  v-model="form.first_name"
                  placeholder="姓名"
                  :auto-focus="true"
                  errorMsg="請輸入姓名"
                  :isError="form.first_name === null"
                />
              </div>
              <div style="width: 48%">
                <Input
                  size="small"
                  type="text"
                  v-model="form.last_name"
                  placeholder="名字"
                  :isError="form.last_name === null"
                />
              </div>
            </div>
            <div class="mt-4">
              <Input
                size="small"
                type="email"
                v-model="form.user_name"
                placeholder="使用者名稱"
                errorMsg="請輸入使用者名稱"
                :isError="form.user_name === null"
              >
                <template v-slot:email>@gmail.com</template>
              </Input>
              <div v-show="!isError" class="mt-2" style="font-size: .9rem;">
                您可以使用英文字母、數字和半形句號
              </div>
              <div class="mt-2 text-primary cursor-point" style="font-size: .9rem;">
                改為使用我目前的電子郵件地址
              </div>
            </div>
          </div>
          <div>
            <Button type="primary" @click="redirect">
              {{ $t('next', $store.state.lang) }}
            </Button>
          </div>
        </div>
        <div style="width: 40%;">
          <div class="logo-img mt-5">
            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg">
          </div>
          <div class="logi-text mt-2"
            style="
              font-size: 1rem;
              font-weight: 300;
              line-height: 1.6rem;
            "
          >
            {{ $t('create_logo_text', $store.state.lang) }}
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Create',

  components: {
    FooterBar,
    Input,
    Button,
  },

  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        user_name: '',
        pass: '',
        check_pass: '',
      },
      isError: false,
    };
  },

  methods: {
    redirect() {
      this.form.first_name = null;
      this.form.user_name = null;
    },
  },
};
</script>
