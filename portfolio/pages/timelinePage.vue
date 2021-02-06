<template>
  <v-timeline>
    <v-timeline-item
        v-for="t in timelines"
        :key="t"
        color="red lighten-2"
        large
    >
      <template v-slot:opposite>
        <span>{{ t.date }}</span>
        <br />
        <span>{{ t.workTitle }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">

          <TokenComponent
              :token-text="t.skill"
          />
        </v-card-title>
        <v-card-text>
          {{ t.workDescription }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import TokenComponent from "../components/TokenComponent";

export default {
  name: "timelineComponent",
  components: {TokenComponent},
  data: () => ({
    timelines: [
      {
        date: '2021-01 ~ 2020-02',
        workTitle: 'Application 로그 통합',
        workDescription: '로그용 ELK 구축',
        skill: 'Elastic stack'
      },
      {
        date: '2020-10 ~ 2020-12',
        workTitle: '위아자 사이트 개편',
        workDescription: '사용자 경험 최적화 후 나눔 물품의 신청 증가, 관리의 편의 증가',
        skill: "java batch"
      },
      {
        date: '2020-02 ~ 2020-05',
        workTitle: '중앙데일리 서비스 및 WCMS 구축',
        workDescription: 'gitlab, jenkins 서버 구축 및 기사 파트 개발',
        skill: "gitlab, jenkins, mocha, junit4 testing guide"
      },
      {
        date: '2019-02 ~ 재직중',
        workTitle: '중앙그룹 WCMS 개발 및 운영',
        skill: 'js, java, mssql'
      },
    ]
  })
}
</script>

<style scoped>

</style>