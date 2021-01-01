<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          <p>안녕하세요.</p><br/>
          <p>효율을 위해 의견을 제시하며 성장을 위해 공유하고 질문하는 고필성입니다.</p>
        </v-card-title>
        <v-card-text>
          <h3>코드로 대화하고 싶은 개발자</h3>
          <p>오늘도 한 걸음.</p>

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
            to="/skill"
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
