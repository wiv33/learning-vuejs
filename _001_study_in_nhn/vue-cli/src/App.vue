<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" v-model="username" type="text">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" v-model="password" type="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import api from 'axios'
export default {
  name: "App",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      console.log(this.username, this.password);
      const url = 'https://jsonplaceholder.typicode.com/users';
      api.post(url, {
        username: this.username,
        password: this.password
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>
