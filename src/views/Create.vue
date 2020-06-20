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
                  v-model.trim="form.first_name"
                  placeholder="姓名"
                  :auto-focus="autoFocus === 'first_name'"
                  errorMsg="請輸入姓名"
                  :isError="firstNameState"
                />
              </div>
              <div style="width: 48%">
                <Input
                  size="small"
                  type="text"
                  v-model.trim="form.last_name"
                  placeholder="名字"
                  :auto-focus="autoFocus === 'last_name'"
                  errorMsg="請輸入名字"
                  :isError="lastNameState"
                />
              </div>
            </div>
            <div class="mt-4">
              <Input
                size="small"
                :type="userNameType"
                v-model.trim="form.user_name"
                placeholder="使用者名稱"
                :auto-focus="autoFocus === 'user_name'"
                :errorMsg="userNameErrMsg"
                :isError="userNameState"
              >
                <template v-slot:email>{{ emailInputText }}</template>
              </Input>
              <div v-show="!userNameErrMsg" class="mt-2" style="font-size: .9rem;">
                您可以使用英文字母、數字和半形句號
              </div>
              <div
                class="mt-2 text-primary cursor-point"
                style="font-size: .9rem;"
                @click="changUserNameType"
              >
                {{ userNameText }}
              </div>
            </div>
            <div class="mt-4 d-flex justify-content-between">
              <div style="width: 42%">
                <Input
                  size="small"
                  :type="passType"
                  v-model.trim="form.pass"
                  placeholder="密碼"
                  :auto-focus="autoFocus === 'pass'"
                  :errorMsg="passErrMsg"
                  :isError="passState"
                />
              </div>
              <div style="width: 42%">
                <Input
                  size="small"
                  :type="passType"
                  v-model.trim="check_pass"
                  placeholder="確認"
                  :auto-focus="autoFocus === 'check_pass'"
                  :errorMsg="checkPassErrMag"
                  :isError="checkPassState"
                />
              </div>
              <div
                ref="pass-icon"
                class="cursor-point align-self-center"
                @click="actTogglePassIcon"
              >
                <svg-icon v-show="!showPass" icon-class="eye-show" size="25px" />
                <svg-icon v-show="showPass" icon-class="eye-close" size="25px" />
              </div>
            </div>
            <div v-show="!passState || !checkPassState" class="mt-2" style="font-size: .9rem;">
              請混合使用 8 個字元以上的英文字母、數字和符號
            </div>
          </div>
          <div class="mt-5 d-flex justify-content-between">
            <div class="text-left text-primary cursor-point mt-3" @click="redirectLogin">
              <!-- {{ $t('pass_forgot', $store.state.lang) }} -->
              請改為登入帳戶
            </div>
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
      autoFocus: 'first_name',
      passType: 'password',
      showPass: false,
      userNameType: 'email',
      userNameText: '改為使用我目前的電子郵件地址',
      emailInputText: '@gmail.com',

      form: {
        first_name: '',
        last_name: '',
        user_name: '',
        pass: '',
      },
      check_pass: '',
      emailRule: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,

      firstNameState: false,
      lastNameState: false,
      userNameState: false,
      passState: false,
      checkPassState: false,
      firstNameErrMsg: '',
      lastNameErrMsg: '',
      userNameErrMsg: '',
      passErrMsg: '',
      checkPassErrMag: '',
    };
  },

  methods: {
    changUserNameType() {
      this.autoFocus = '';

      if (this.userNameType === 'email') {
        this.userNameType = 'text';
        this.userNameText = '改為建立新的 Gmail 地址';
      } else {
        this.userNameType = 'email';
        this.userNameText = '改為使用我目前的電子郵件地址';
      }

      setTimeout(() => this.autoFocus = 'user_name', 0)
    },

    actTogglePassIcon() {
      this.showPass = !this.showPass;

      if (this.showPass) {
        this.passType = 'text';
      } else {
        this.passType = 'password';
      }
    },

    redirectLogin() {
      this.$router.push('/login')
    },

    redirect() {
      let validStepCheck = 0; // 統計驗證有幾個步驟
      this.checkPassState = false; // init
  
      const keys = Object.keys(this.form); // 驗證是否有空值
      const values = Object.values(this.form);
      const index = values.indexOf('');
      if (index > -1) {
        console.log('檢測空值');
        this.firstNameState = values[0] === '' ? true : false;
        this.lastNameState = values[1] === '' ? true : false;
        this.userNameState = values[2] === '' ? true : false;
        this.passState = values[3] === '' ? true : false;
        this.firstNameErrMsg = ' 請輸入姓名';
        this.lastNameErrMsg = '請輸入名字';
        this.passErrMsg = '輸入密碼';
        this.userNameErrMsg = '請選擇 Gmail 地址';
        this.checkPassErrMag = '確認密碼';
        this.autoFocus = keys[index];
        validStepCheck++;
      }

      if (this.userNameType === 'text' && !this.emailRule.test(this.form.user_name) && this.form.user_name) { // 檢測 user_name 的 email 格式
        console.log('檢測 user_name 的 email 格式');
        this.userNameState = true;
        this.userNameErrMsg = 'email 格式不對';
        validStepCheck++;
      }
      
      if (this.form.pass.length > 0 && this.form.pass.length < 8) { // 驗證 pass 長度
        console.log('驗證 pass 長度');
        this.isError = true;
        this.passState = true;
        this.passErrMsg = '請設定 8 個字元以上的密碼';
        validStepCheck++;

      } else if (this.form.pass && !this.check_pass) { // 驗證 check-pass
        console.log('驗證 check-pass');
        this.checkPassState = true;
        validStepCheck++;

      } else if (this.form.pass !== this.check_pass) { // 驗證 check-pass 與 pass
        console.log('驗證 check-pass 與 pass');
        this.checkPassState = true;
        this.checkPassErrMag = '這些密碼不相符，請再試一次。'
        validStepCheck++;
      }

      console.log(validStepCheck);
      if (validStepCheck > 0) return;
      
      const vm = this.form;
      const form = {
        first_name: vm.first_name,
        last_name: vm.last_name,
        user_name: this.userNameType === 'text' ? vm.user_name : vm.user_name + this.emailInputText,
        password: vm.pass,
      }
      console.log('註冊新帳號成功!，使用者資訊: ', form);
    },
  },
};
</script>
