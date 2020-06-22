import Table from '@/views/Admin/components/table.vue';
export default {
  props: {
    apiData: {
      type: Array,
      default: () => [],
    }
  },

  components: {
    Table,
  },

  mounted() {
    if (this.apiData) {
      this.data = _.cloneDeep(this.apiData);
    }
  },

  data() {
    return {
      data: [],
    }
  },

  methods: {
    actApiUpdate() {
      // this.isactApi = !this.isactApi;
    },
  }
}
