<template>
  <div>
    <div class="mb-3">
      <input type="text" v-model="keyword" placeholder="輸入文字搜尋">
    </div>
    <Table />
    <div class="mt-4">
      <button @click="actApiUpdate">更改使用者資料</button>
      {{ isactApi }}
    </div>
  </div>
</template>

<script>
import mixin from './mixins/index';

export default {
  name: 'Mode1',
  mixins: [mixin],

  computed: {

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