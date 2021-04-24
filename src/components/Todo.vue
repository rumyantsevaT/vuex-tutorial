<template>
  <div>
    {{ todo.title }}
    <button @click="deleteTodo">Удалить</button>
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
      }
    }
  }
</script>

