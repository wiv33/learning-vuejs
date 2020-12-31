<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          <p>안녕하세요.</p>
          <p>코드로 대화하고 싶은 개발자 고필성입니다.</p>
        </v-card-title>
        <v-card-text>
          <h3>코드로 대화하고 싶은 개발자</h3>
          <p>세상의 빠른 변화를 이해하고 변화에 맞추어 지식을 구현하는 사람이라고 생각합니다.</p>
          <h3>성향</h3>
          <p>가능한 범위 내에서 효율을 중시하며, <br/>문제의 근본을 개선하고자 노력합니다.</p>
          <p>문제 해결을 위해 의견을 제시하는 것과 논의하는 것을 즐겨합니다.</p>
          <p>공유 경제의 가치를 이해하고 있고, 지식의 공유는 더욱 이롭다고 생각합니다.</p>

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
