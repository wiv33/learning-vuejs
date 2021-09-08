<template>
  <footer>
    my footer
    <div> {{ propsdata }}</div>
    <button v-on:click="sendEvent">send</button>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  props: ['propsdata'],
  methods: {
    sendEvent() {
      // 상위 컴포넌트로 전달
      this.$emit('renew', 'i am footer')
    }
  }
}
</script>

<style scoped>

</style>
