<template>
  <div>
    {{ str }}
<!--    <AppHeader v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"/>-->
    <AppHeader v-bind:propsdata="str"/>
    <app-footer v-on:renew="renewStr" v-bind:propsdata="str"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from "./components/AppFooter";

export default {
  name: 'App2',
  data() {
    return {
      str : 'hi my header'
    }
  },
  methods: {
    renewStr(str) {
      this.str = str
    }
  },
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style scoped>

</style>
