<template>
  <v-row>
    <v-col>
      <v-hover
          v-slot="{ hover }"
          close-delay="200"
      >
        <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            height="350"
            max-width="500"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            {{ itemTitle }}
          </v-card-text>
          <v-img
              :src="itemSrc"
              :alt="itemTitle"
              :align="true"
              contain
              aspect-ratio="1.3"
              light
          >
            <!--            <v-progress-circular-->
            <!--                indeterminate-->
            <!--                color="grey lighten-5"-->
            <!--            ></v-progress-circular>-->
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import StarComponent from "./StarComponent";

export default {
  name: "ImageComponent",
  data: () => ({

  }),
  props: ['itemSrc', 'itemTitle', 'itemDescription', 'starCnt']
}
</script>

<style lang="sass" scoped>
.language .v-card.on-hover
  background: linear-gradient(135deg, orange, cyan)

  > .v-card__text
    color: #ffffff


.back-end .v-card.on-hover
  background: linear-gradient(45deg, red, blue)

  > .v-card__text
    color: #ffffff

.front-end .v-card.on-hover
  background: linear-gradient(45deg, yellow, green)

  > .v-card__text
    color: #ffffff

.database .v-card.on-hover
  background: linear-gradient(45deg, red, blue)

  > .v-card__text
    color: #ffffff

.messaging .v-card.on-hover
  background: linear-gradient(30deg, purple, pink)

  > .v-card__text
    color: #ffffff

.cloud .v-card.on-hover
  background: linear-gradient(135deg, blue, yellow)

  > .v-card__text
    color: #ffffff

.ml .v-card.on-hover
  background: linear-gradient(135deg, red, yellow)

  > .v-card__text
    color: #ffffff

</style>
