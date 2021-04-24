<template>
  <div>
    <div class="block-todo">
      <span :class="{completed: todo.completed, color: todo.isRed}" @click="toggleTodoStatus(todo)">{{ todo.title }}</span>
    <button class="btn button btn-danger" @click="deleteTodo(todo)">Удалить</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    props: {
      todo: {
        type: Object,
      },
    },
    methods: {
      ...mapActions({
        deleteTodo: 'deleteTodo',
        toggleTodoStatus: 'toggleTodoStatus',
      })
      // deleteTodo(){
      //   this.$store.dispatch('deleteTodo', this.todo);
      // },

      // toggleTodoStatus() {
      //   this.$store.dispatch('toggleTodoStatus', this.todo);
      // },
    },
  }
</script>

<style scoped>
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
  .color {
    color: red;
  }
</style>

