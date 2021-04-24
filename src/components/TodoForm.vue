<template>
  <div>
    <div class="form">
      <b-form-input v-model="newTodoItem" placeholder="Введите задачу"></b-form-input>
      <button class="btn button btn-success" variant="success" type="submit" @click="addNewTodoItem">Отправить</button>
    </div>       
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

<style lang="css" scoped>
  .form {
    max-width: 500px;
    margin: 10px auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
  }
  .button {
    margin-left: 10px;
  }

</style>