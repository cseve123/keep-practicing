<template>
  <div class="list">
    <ul>
      <li v-for="item in arr" :key="item.id">
        {{item.id}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data() {
      return {
        arr: []
      }
    },
    async mounted() {
      let { data: { list } } = await aixos.get('/list');
      this.$data.list = ist;
    },
  }
</script>

<style lang="scss" scoped>

</style>