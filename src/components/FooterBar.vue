<template>
  <div class="mt-3 px-2 d-flex justify-content-between" style="font-size: .9rem;">
    <div style="font-weight: 600;">
      繁體中文
    </div>
    <ul class="d-flex justify-content-between" style="width: 35%">
      <li class="cursor-point">說明</li>
      <li class="cursor-point">隱私權</li>
      <li class="cursor-point">條款</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'FooterBar',

  components: {
  },

  data() {
    return {
      account: '',
      isFocus: false,
      hasData: false,
    };
  },

  watch: {
  },

  methods: {
  },

};
</script>

<style lang="scss" scoped>
</style>
