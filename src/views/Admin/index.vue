<template>
  <div>
    <div class="mb-5">
      <button class="mr-2" @click="changeType">切版版型</button>
      {{ type }}
    </div>
    <component :is="type" :apiData="apiData" />
  </div>
</template>

<script>

export default {
  name: 'Admin',

  components: {
    Mode1: () => import('./components/mode1.vue'),
    Mode2: () => import('./components/mode2.vue'),
  },

  mounted() {
    this.getUserList();
  },

  computed: {
    apiData() {
      return this.$store.state.apiData;
    }
  },

  data() {
    return {
      type: 'mode1',
    }
  },

  methods: {
    changeType() {
      const type = this.type;
      this.type = type ==='mode1' ? 'mode2' : 'mode1';
    },

    getUserList() {
      this.$store.dispatch('get_user_list');
    },
  }
}
</script>