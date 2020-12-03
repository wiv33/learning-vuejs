<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <UserComponent></UserComponent>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserComponent from "./components/UserComponent";

export default {
  name: "App",

  components: {
    UserComponent
  },

  data: () => ({
    //
  })
};
</script>
