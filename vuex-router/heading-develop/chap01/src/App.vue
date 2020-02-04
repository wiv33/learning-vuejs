<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="count++">추가</button>
    <HomeVue></HomeVue>
  </div>
</template>

<script>
  import HomeVue from './Home';
  export default {
    components: {
      HomeVue: HomeVue
    },
    data() {
      return {
        title: "Hello World?",
        count: 1
      }
    }
  }
</script>
