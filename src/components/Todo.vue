<template>
  <div>
    <div class="block-todo">
      <span :class="{completed: todo.completed}" @click="toggleTodoStatus">{{ todo.title }}</span>
    <button class="btn button btn-danger" @click="deleteTodo">Удалить</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
      },
    },
    methods: {
      deleteTodo(){
        this.$store.dispatch('deleteTodo', this.todo);
      },

      toggleTodoStatus() {
        this.$store.dispatch('toggleTodoStatus', this.todo);
      },
    },
  }
</script>

<style lang="css" scoped>
  .block-todo {
    max-width: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    flex-basis: 100px;
    margin: 10px auto;
    padding: 0 15px;
  }
  .completed {
    text-decoration: line-through;
  }
</style>

