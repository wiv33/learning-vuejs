<template>
  <header>
    <h1>my header</h1>
    <div> {{ propsdata }}</div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['propsdata']
}
</script>

<style scoped>

</style>
