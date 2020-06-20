<template>
  <div>
    <div>
      <button class="mr-2" @click="changeType">切版版型</button>
      {{ type }}
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      type: 'mode1',
    }
  },

  methods: {
    changeType() {
      const type = this.type;
      this.type = type ==='mode1' ? 'mode2' : 'mode1';
    },
  }
}
</script>