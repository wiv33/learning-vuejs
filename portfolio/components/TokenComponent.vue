<template>
  <div class="text-center">

    <v-chip
        v-for="(x, idx) in getChipSet(tokenText)"
        :key="idx"
        :color="x.color"
        :text-color="x.textColor"
    >
      {{ x.txt }}
    </v-chip>

  </div>
</template>

<script>
export default {
  name: "TokenComponent",
  data: () => ({
    colors: ['white', '', 'primary', 'green', 'red', 'pink', 'secondary']
  }),
  methods: {
    getChipSet(text) {
      let result = []
      for (let t of text.split(",")) {
        const color = this.getColor()
        result.push({
          txt: t.trim(),
          color: color.trim(),
          textColor: color.trim() === "white" ? "black" : "white"
        })
      }
      return result
    },
    getColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    }
  },
  props: ['tokenText']
}
</script>

<style scoped>

</style>