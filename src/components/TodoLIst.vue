<template>
  <div>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Todo from './Todo.vue';

export default {
  components: {
    Todo,
  },
  computed: {
    // todos() {
    //   return this.$store.state.todos; 
    // } // переделали в mapState
    ...mapState({
      todos: 'todos',
    })
  },
}
</script>

<style lang="scss" scoped>

</style>
