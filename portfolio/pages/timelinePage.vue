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
          date: '2019-02 ~ ',
          workTitle: '위아자 웹 개편',
          workDescription: `위아자 웹 개편과 동시에 WCMS 기능의 확장을 하였으며, 유연함이 필요한 구간의 java, js 기능을 구현하였습니다.`,
          skill: `mocha, chai, JS`
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>