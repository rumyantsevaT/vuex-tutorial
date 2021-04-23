<template>
  <div>
    {{ todo.title }}
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>