<template>
  <div>
    <div class="mb-3">
      <input type="text" v-model="keyword" placeholder="輸入文字搜尋">
    </div>
    <Table :data="filter" />
    <!-- <div class="mt-4">
      <button @click="actApiUpdate">更改使用者資料</button>
    </div> -->
  </div>
</template>

<script>
import mixin from './mixins/index';

export default {
  name: 'Mode1',
  mixins: [mixin],

  components: {
    Table: () => import('@/views/Admin/components/table.vue'),
  },

  computed: {
    filter: {
      get: function() {
        const keyword = this.keyword;
        if (keyword) {
          return this.apiData.filter(i =>i.username.match(keyword) || i.id.match(keyword))
        }
        return this.apiData;
      },
      set: function(value) {
        this.apiData = value;
      }
    },
  },

  data() {
    return {
      keyword: '',
    }
  },

  methods: {
  }
}
</script>