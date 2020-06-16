<template>
  <div class="mt-3 px-2 d-flex justify-content-between" style="font-size: .9rem;">
    <Select :list="['繁體中文', 'English']" @select-value="getSelect" />
    <ul class="d-flex justify-content-between" style="width: 35%">
      <li class="cursor-point">說明</li>
      <li class="cursor-point">隱私權</li>
      <li class="cursor-point">條款</li>
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

  data() {
    return {
      lang: '',
    };
  },

  methods: {
    getSelect(value) {
      this.lang = value;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
