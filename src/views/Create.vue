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
                  v-model.trim="form.firstName"
                  placeholder="姓名"
                  :auto-focus="autoFocus === 'firstName'"
                  errorMsg="請輸入姓名"
                  :isError="firstNameState"
                />
              </div>
              <div style="width: 48%">
                <Input
                  size="small"
                  type="text"
                  v-model.trim="form.lastName"
                  placeholder="名字"
                  :auto-focus="autoFocus === 'lastName'"
                  errorMsg="請輸入名字"
                  :isError="lastNameState"
                />
              </div>
            </div>
            <div class="mt-4">
              <Input
                size="small"
                :type="userNameType"
                v-model.trim="form.userName"
                placeholder="使用者名稱"
                :auto-focus="autoFocus === 'userName'"
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
                  v-model.trim="checkPass"
                  placeholder="確認"
                  :auto-focus="autoFocus === 'checkPass'"
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
      autoFocus: 'firstName',
      passType: 'password',
      showPass: false,
      userNameType: 'email',
      userNameText: '改為使用我目前的電子郵件地址',
      emailInputText: '@gmail.com',

      form: {
        firstName: '',
        lastName: '',
        userName: '',
        pass: '',
      },
      checkPass: '',
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

      setTimeout(() => this.autoFocus = 'userName', 0)
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
      const validForm = this.validForm();                        // 驗證是否有空值
      const validUserNameType = this.validUserNameType();        // 檢測 userName 的 email 格式
      const vaildPassLen = this.vaildPassLen();                  // 檢測 userName 的 email 格式
      const vaildCheckPass = this.vaildCheckPass(vaildPassLen);  // 驗證 check-pass (空值 & 相符)

      const validStepCheck = [validForm, validUserNameType, vaildPassLen, vaildCheckPass].reduce((a, b) => a + b); // 統計驗證結果
      if (validStepCheck > 0) return;
      
      const vm = this.form;
      const form = {
        firstName: vm.firstName,
        lastName: vm.lastName,
        userName: this.userNameType === 'text' ? vm.userName : vm.userName + this.emailInputText,
        password: vm.pass,
      }
      console.log('註冊新帳號成功!，使用者資訊: ', form);
    },

    validForm() {
      this.autoFocus = '';
      const vm = this;
      const keys = Object.keys(this.form);
      const values = Object.values(this.form);

      function check(index, msg) {
        const res = values[index] === '' ? true : false;
        if (res) {
          vm[`${keys[index]}ErrMsg`] = msg;
        }
        return res
      }
      this.firstNameState = check(0, '請輸入姓名');
      this.lastNameState = check(1, '請輸入名字');
      this.userNameState = check(2, '請選擇 Gmail 地址');
      this.passState = check(3, '輸入密碼');

      const index = values.indexOf('');
      if (index > -1) {
        setTimeout(() => this.autoFocus = keys[index], 0)
        return 1
      }
      return 0
    },

    validUserNameType() {
      const rules = [this.userNameType === 'text', !this.emailRule.test(this.form.userName), this.form.userName !== '']
      const result = rules.every(i => i === true);
      if (result) {
        this.userNameState = true;
        this.userNameErrMsg = 'email 格式不對';
        return 1
      }
      return 0
    },

    vaildPassLen() {
      const pass = this.form.pass;
      const rules = [pass.length > 0, pass.length < 8];

      const noData = pass.length === 0;
      const result = rules.every(i => i === true);

      if (noData) return 2;

      if (result) {
        this.passState = true;
        this.passErrMsg = '請設定 8 個字元以上的密碼';
        return 1
      }
      return 0
    },

    vaildCheckPass(vaildPassLen) {
      if (vaildPassLen > 0) return 1;

      if (!this.checkPass) {
        this.checkPassState = true;
        this.checkPassErrMag = '確認密碼';
        return 1
      }
      
      if (this.form.pass !== this.checkPass) {
        this.checkPassState = true;
        this.checkPassErrMag = '這些密碼不相符，請再試一次。'
        return 1
      }
      this.checkPassState = false;
      return 0
    },
  },
};
</script>
