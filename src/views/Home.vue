<template>
  <div class="home">
    <div class="mx-auto" style="width: 448px; height: 550px">
      <div class="card text-center">
        <span class="logo">Google</span>
        <div v-if="$route.name === 'Login'">
          <h1>{{ $t('login_sign_in', $store.state.lang) }}</h1>
          <p>{{ $t('login_title', $store.state.lang) }}</p>
        </div>

        <div v-if="$route.name === 'Pass'">
          <h1>{{ $t('pass_title', $store.state.lang) }}</h1>
          <div ref="tag" class="tag mx-auto px-3 py-1" @click="redirectLoginPage">
            {{ account | showStyle }}
          </div>
        </div>

        <div class="view-content">
          <transition name="slide-left" mode="out-in">
            <router-view />
          </transition>
        </div>

      </div>
      <FooterBar />
    </div>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'Home',

  components: {
    FooterBar,
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

  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .card {
    width: 100%;
    min-height: 530px;
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

    .view-content {
      width: 100%;
      overflow-x: hidden;
    }
  }

  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: ease-in 300ms;
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate(100%, 0);
  }
  .slide-left-leave-active {
    opacity: 1;
    transform: translate(-100%, 0);
  }

</style>
