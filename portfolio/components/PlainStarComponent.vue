<template>
  <div class="text-center">
    <v-rating
        v-model="starRating"
        background-color="lighten-3"
        :background-color="getColor"
        :color="getColor"
        large
    ></v-rating>
  </div>
</template>

<script>
export default {
  name: "PlainStarComponent",
  data: () => ({
    color: '',
    backgroundColor: '',
    colors: ['purple', 'pink', 'orange', 'green', 'red', 'indigo']
  }),
  computed: {
    getColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  },
  props: ['starRating'],
}
</script>

<style scoped>

</style>

