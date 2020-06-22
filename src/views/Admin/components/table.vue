<template>
  <table>
    <tr>
      <th>使用者名稱</th>
      <th>信箱</th>
      <th>權限</th>
    </tr>
    <tr v-for="item in data" :key="item.id" @click="change(item)">
      <td>
        <span v-show="isEdit !== item.id">{{ item.username }}</span>
        <input v-show="isEdit === item.id" type="text" v-model="form.username" @change="update(item.id)">
      </td>
      <td>{{ item.id }}</td>
      <td>
        <span v-if="item.admin === 0">user</span>
        <span v-if="item.admin === 1">root</span>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Table',

  props: {
    data: {
      type: Array,
      default: () => [],
    }
  },

  computed: {
    list: {
      get: function() {
        const data = _.cloneDeep(this.data);
        return data;
      },
      set: function(value) {
        this.list = value;
      }
    }
  },

  data() {
    return {
      isEdit: '',
      form: {
        username: '',
        admin: 0,
      }
    }
  },

  methods: {
    change(item) {
      this.isEdit = item.id;
      this.form.username = item.username;
      this.form.admin = item.admin;
    },

    update(id) {
      const data = _.cloneDeep(this.data)
      data.filter((i, k) => {
        if (i.id === id) {
          return data[k].username = this.form.username;
        }
      })
      this.$emit('update:data', data);
      this.isEdit = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  table {
    width: 400px;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
      padding: 5px;
    }
  }

  input {
    width: 80px;
  }
</style>