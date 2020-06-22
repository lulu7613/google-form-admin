<template>
  <div>
    <div class="mb-3">
      <select v-model="keyword">
        <option value=""></option>
      </select>
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
  name: 'Mode2',
  mixins: [mixin],

  data() {
    return {
      keyword: '',
    }
  }
}
</script>