<template>
  <div class="text-center">
    <v-rating v-model="starCnt">
      <template v-slot:item="props">
        <v-icon
            :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
            large
            @click="props.click"
        >
          {{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
        </v-icon>
      </template>
    </v-rating>
  </div>
</template>

<script>
export default {
  name: "StarComponent",
  data: () => ({
    colors: ['white', 'green', 'orange', 'purple', 'pink'],
    // rating: 4.5,
  }),
  props: ['starCnt'],
  methods: {
    genColor(i) {
      return this.colors[i]
    },
  },
}
</script>

<style scoped>

</style>