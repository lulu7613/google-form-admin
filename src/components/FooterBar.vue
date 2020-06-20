<template>
  <div class="mt-3 px-2 d-flex justify-content-between" style="font-size: .9rem;">
    <Select :list="['繁體中文', 'English']" :initValue="lang" @select-value="getSelect" />
    <ul class="d-flex justify-content-between" style="width: 150px">
      <li class="cursor-point">{{ $t('footerBar_help', $store.state.lang) }}</li>
      <li class="cursor-point">{{ $t('footerBar_privacy', $store.state.lang) }}</li>
      <li class="cursor-point">{{ $t('footerBar_terms', $store.state.lang) }}</li>
    </ul>
  </div>
</template>

<script>
import Select from '@/components/Select.vue';

export default {
  name: 'FooterBar',

  components: {
    Select,
  },

  computed: {
    lang() {
      const lang = this.$store.state.lang;
      return lang === 'tw' ? '繁體中文' : 'English'
    }
  },

  methods: {
    getSelect(value) {
      const lang = value === 'English' ? 'en' : 'tw';
      this.$store.dispatch('setLang', lang);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
