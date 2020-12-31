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
        <v-card-title class="headline">{{ t.skill }}</v-card-title>
        <v-card-text>
          {{ t.workDescription }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "timelineComponent",
  data() {
    return {
      timelines: [
        {
          date: '2019-02 ~ 재직중',
          workTitle: '중앙그룹 WCMS 개발 및 운영',
        },
        {
          date: '2021-01 ~ 2020-02',
          workTitle: '각 프로젝트의 로그 통합 구축',
          workDescription: 'ELK cluster 구축, 서비스 단위의 로그 통합 및 분류 - 분석을 위한 도메인 로그, 시스템 로그'
        },
        {
          date: '2020-10 ~ 2020-12',
          workTitle: '위아자 사이트 구축',
        },
        {
          date: '2020-02 ~ 2020-05',
          workTitle: '중앙데일리 서비스 및 WCMS 구축',
          workDescription: 'gitlab, jenkins 서버 구축'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>