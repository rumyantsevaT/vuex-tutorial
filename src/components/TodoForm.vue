<template>
  <div>
<input type="text" v-model="newTodoItem">
<input type="submit" @click="addNewTodoItem">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTodoItem : "",
      }
    },
    methods: {
      addNewTodoItem() {
          this.$store.dispatch('addNewTodo', this.newTodoItem);
          this.newTodoItem = "";
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>