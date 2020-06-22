<template>
  <div>
    <div class="mb-5">
      <button class="mr-2" @click="changeType">切版版型</button>
      {{ type }}
    </div>
    <Mode1 :is="type" />
  </div>
</template>

<script>
import Mode1 from './components/mode1.vue';
import Mode2 from './components/mode2.vue';

export default {
  name: 'Admin',

  components: {
    Mode1,
    Mode2,
  },

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