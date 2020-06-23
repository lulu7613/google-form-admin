// import Table from '@/views/Admin/components/table.vue';
export default {
  props: {
    apiData: {
      type: Array,
      default: () => [],
    }
  },

  // components: {
  //   Table: () => import('@/views/Admin/components/table.vue'),
  // },

  data() {
    return {
    }
  },

  methods: {
    actApiUpdate() {
      this.$store.dispatch('get_user_list');
    },
  }
}
