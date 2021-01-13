<template>
  <v-card>
    <v-toolbar
        flat
        color="blue-grey"
        dark
    >
      <v-toolbar-title>{{ postTitle }}</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
          filled
          label="Code link"
          :value="postLink"
      ></v-text-field>

      <v-textarea
          filled
          label="Text"
          :value="postDescription"
      ></v-textarea>

      <v-divider class="my-2"></v-divider>

      <v-item-group multiple>
        <v-subheader>Tags</v-subheader>
        <v-item
            v-for="n in postTags"
            :key="n"
            v-slot="{ active, toggle }"
        >
          <v-chip
              active-class="pink--text"
              :input-value="active"
              @click="toggle"
          >
            {{ n }}
          </v-chip>
        </v-item>
      </v-item-group>
    </v-card-text>

    <v-divider/>

    <v-card-actions>
      <v-spacer></v-spacer>
<!--      <v-btn-->
<!--          color="success"-->
<!--          depressed-->
<!--      >-->
<!--        Post-->
<!--      </v-btn>-->
    </v-card-actions>
  </v-card>
</template>

<script>
import TokenComponent from "./TokenComponent";

export default {
  name: "PostsHistory",
  components: {TokenComponent},
  props: ['postTitle', 'postLink', 'postDescription', 'postTags']
}
</script>

<style scoped>

</style>