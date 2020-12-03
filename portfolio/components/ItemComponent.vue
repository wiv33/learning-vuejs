<template>
  <v-card>
    <v-img
        class="pink--text"
        height="500px"
        contain
        :src="itemSrc"
        :alt="itemTitle"
    >
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">{{ itemTitle.split(":")[0] }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <div style="margin: auto;">
        <span class="grey--text">{{ itemTitle }}</span><br>
        <span v-html="itemDescription"></span>
      </div>
    </v-card-title>
    <!--    <v-card-actions>-->
    <!--      <v-btn flat color="orange">Share</v-btn>-->
    <!--    </v-card-actions>-->
  </v-card>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: ['itemSrc', 'itemTitle', 'itemDescription']
}
</script>

<style scoped>

</style>
