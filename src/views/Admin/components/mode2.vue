<template>
  <div>
    <div class="mb-3">
      <select v-model="keyword">
        <option v-for="item in data" :key="item.id" :value="item.username">{{ item.username }}</option>
      </select>
    </div>
    <Table :data.sync="filter" />
    <div class="mt-4">
      <button @click="actApiUpdate">更改使用者資料</button>
    </div>
  </div>
</template>

<script>
import mixin from './mixins/index';

export default {
  name: 'Mode2',
  mixins: [mixin],

  mounted() {
    if (this.data) {
      this.keyword = this.data[0].username;
    }
  },

  computed: {
    filter() {
      const keyword = this.keyword;
      return this.data.filter(i => i.username === keyword);
    }
  },

  data() {
    return {
      keyword: '',
    }
  }
}
</script>