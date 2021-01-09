<template>
  <v-card>
    <v-tabs
        color="deep-purple accent-4"
        right
    >
      <v-tab v-for="title in Object.keys(tabs)"
             :key="title"
      >
        {{ title }}
      </v-tab>

      <v-tab-item
          v-for="(item, index) in tabs"
          :key="index"
      >
        <v-container fluid>
          <v-row>
            <v-col
                v-for="(x, idx) in item"
                :key="idx"
                cols="12"
                md="4"
            >
              <ImageComponent
                  :key="x.src"
                  :item-src="x.src"
                  :item-title="x.title"
                  :item-description="x.description"
                  :class="index"
              />
              <StarComponent :star-cnt="x.starCnt"></StarComponent>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
// import ItemComponent  from '~/components/ItemComponent.vue'
import ImageComponent from "../components/ImageComponent";
import StarComponent  from "../components/StarComponent";

export default {
  methods: () => {

  },
  data() {
    return {
      activeTab: '',
      tabs: {
        language: [
          {
            src: '/learning-vuejs/jdk.jpeg',
            title: 'JVM',
            description: `주력 언어는 Java이며, 기본적인 JVM 동작을 이해한 상태에서 소스 코드를 구현합니다. <br />
          또한 kotlin 문법에 관심이 있습니다.`,
            starCnt: 5
          }, {
            src: '/learning-vuejs/python-logo.jpeg',
            title: 'Python',
            description: '머신러닝 모델과 딥러닝을 위해 습득하였습니다',
            starCnt: 3
          }, {
            src: '/learning-vuejs/js-logo.png',
            title: 'JS - ES6',
            description: 'vue.js 위한 webpack의 이해도와 arrow function과 같은 ES6 문법 사용에 적극적입니다.',
            starCnt: 5
          }
        ],
        'back-end': [
          {
            src: '/learning-vuejs/reactor-logo.png',
            title: 'Reactor',
            description: `웹에서 안정적인 시스템 유지와 빠른 응답성의 성능에 매료되어 Flux/Mono를 습득하고 있으며, <br />
          자주 사용하는 메서드의 동작 방식을 이해하고 있습니다.`,
            starCnt: 4
          }, {
            src: '/learning-vuejs/junit5-logo.png',
            title: 'Testing',
            description: `테스팅 숙련도가 높아질수록 개발 시간이 단축되기 때문에 <br />
          개발 방법론을 동원하여 꾸준한 연습을 합니다.`,
            starCnt: 3
          }, {
            src: '/learning-vuejs/spring-cloud.jpg',
            title: 'spring cloud',
            description: `모놀리식 아키텍처에서 모듈화와 철저한 도메인 분리의 숙련도 이후, <br />
           성공할 수 있는 MSA를 위해 관련 지식과 구현을 습득하고 있습니다.`,
            starCnt: 4
          }, {}

        ],
        'front-end': [
          {
            src: '/learning-vuejs/vue.png',
            title: 'Vue + nuxt',
            starCnt: 3
          }
        ],
        database: [
          {
            src: '/learning-vuejs/mongodb.jpeg',
            title: 'docker-compose & mongodb',
            starCnt: 3
          }, {
            src: '/learning-vuejs/postgresql.jpeg',
            title: 'docker & postgresql',
            starCnt: 4
          }, {
            src: '/learning-vuejs/elastic-logo.svg',
            title: 'elastic stack',
            starCnt: 3
          }
        ],
        messaging: [
          {
            src: '/learning-vuejs/kafka-logo.png',
            title: 'kafka & kafka-stream',
            description: `효율과 안정성 신뢰를 바탕으로 '데이터 수집' 및 '전처리' 과정에 유연한 활용을 위해 <br />
          in-out:java - in:python 지속적으로 실습하고 있습니다.`,
            starCnt: 4
          }
        ],
        cloud: [
          {
            src: '/learning-vuejs/aws-logo.png',
            title: 'AWS',
            description: `VPC와 서브넷 설정과 인스턴스 통신, S3 활용, web, kafka 구축이 가능합니다. <br />
          * 주로 kafka 구축 후 데이터 활용을 합니다.`,
            starCnt: 3
          }, {
            src: '/learning-vuejs/gcp-logo.png',
            title: 'GCP',
            description: 'docker-compose 기반의 Jenkins, jar의 자동배포 구축이 가능합니다.',
            starCnt: 3
          }, {
            src: '/learning-vuejs/docker-logo.png',
            title: 'Docker & docker-compose',
            description: '컨테이너 구조를 이해하고 있으며, compose 단위의 배포를 구현할 수 있습니다.',
            starCnt: 4
          }, {
            src: '/learning-vuejs/1200px-Kubernetes_logo_without_workmark.svg.png',
            title: 'kubernetes',
            description: '기본적인 아키텍처를 이해하고 있으며, Deployment yaml 파일을 구현, 수집하고 있습니다.',
            starCnt: 2
          }
        ],
        ml: [
          {
            src: '/learning-vuejs/scikit-learn.png',
            title: 'sklearn',
            starCnt: 3
          },
          {
            src: '/learning-vuejs/tensorflow.svg',
            title: 'tensorflow & keras',
            starCnt: 3
          }
        ]
      },
    }
  },
  components: {
    StarComponent,
    ImageComponent,
    // ItemComponent
  }
}
</script>

<style scoped>

</style>
