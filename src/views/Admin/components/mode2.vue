<template>
  <div>
    <div class="mb-3">
      <select v-model="keyword">
        <option v-for="item in apiData" :key="item.id" :value="item.id">{{ item.username }}</option>
      </select>
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
  name: 'Mode2',
  mixins: [mixin],

  components: {
    Table: () => import('@/views/Admin/components/table.vue'),
  },

  mounted() {
    if (this.apiData) {
      this.keyword = this.apiData[0].id;
    }
  },

  computed: {
    filter() {
      const keyword = this.keyword;
      return this.apiData.filter(i => i.id === keyword);
    }
  },

  data() {
    return {
      keyword: '',
    }
  },
}
</script>