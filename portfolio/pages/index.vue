<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          <p></p><br/>
          <p></p>
        </v-card-title>
        <v-card-text>
          <h3></h3>
          <p></p>

          <hr class="my-3">
          <a
            href="https://psawesome.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share house
          </a>
          <br>
          <a
            href="https://github.com/wiv33"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/skillPage"
          >
            SKILL
          </v-btn>
          <v-btn
            color="pink"
            nuxt
            to="/timelinePage"
          >
            TIMELINE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
