<template>
  <table>
    <tr>
      <th width="30">使用者名稱</th>
      <th width="50">信箱</th>
      <th width="20">權限</th>
    </tr>
    <tr></tr>
  </table>
</template>

<script>
export default {
  name: 'Table',
}
</script>

<style lang="scss" scoped>
  table {
    width: 700px;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
      padding: 5px;
    }
  }
</style>