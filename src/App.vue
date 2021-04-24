<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Список дел:</h1>
    <h4>Выполненных: {{ computedTodos }} </h4>
    <h4>Предстоящих: {{ pendingTodos }} </h4>
    <br>
    <TodoList/>
    <TodoForm/>
  </div>
</template>

<script>
import TodoList from './components/TodoLIst';
import TodoForm from '@/components/TodoForm.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    computedTodos() {
      return this.$store.getters.completedTodos;
    },
    pendingTodos() {
      return this.$store.getters.pendingTodos;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
