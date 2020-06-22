import Table from '@/views/Admin/components/table.vue';

export default {
  name: 'Mode1',

  components: {
    Table,
  },

  data() {
    return {
      isactApi: false,
    }
  },

  methods: {
    actApiUpdate() {
      this.isactApi = !this.isactApi;
    },
  }
}
