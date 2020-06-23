<template>
  <table>
    <tr>
      <th>使用者名稱</th>
      <th>信箱</th>
      <th>權限</th>
    </tr>
    <tr v-for="item in data" :key="item.id" @click="actEdit(item)" v-clickoutside="actCloseEdit">
      <td>
        <span v-show="isEdit !== item.id">{{ item.username }}</span>
        <input v-show="isEdit === item.id" type="text" v-model="form.username" @change="update(item.id)">
      </td>
      <td>{{ item.id }}</td>
      <td>
        <span v-show="isEdit !== item.id">{{ item.admin }}</span>
        <input v-show="isEdit === item.id" type="text" v-model="form.admin" @change="update(item.id)">
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
  },

  data() {
    return {
      isEdit: '',
      form: {
        username: '',
        admin: '',
      }
    }
  },

  methods: {
    actEdit(item) {
      this.isEdit = item.id;
      this.form.username = item.username;
      this.form.admin = item.admin;
    },

    actCloseEdit() {
      this.isEdit = '';
    },

    update(id) {
      const data = {
        id,
        username: this.form.username,
        admin: this.form.admin,
      }
      this.$store.commit('CHANGE_USERNAME', data);
      this.$emit('change');
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