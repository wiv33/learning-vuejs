<template>
  <div>
    <PostsHistory v-for="inPost in posts"
                  :key="inPost"

                  :post-title="inPost.postTitle"
                  :post-link="inPost.postLink"
                  :post-description="inPost.postDescription"
                  :post-tags="inPost.postTags"
    />
  </div>
</template>
<script>
import PostsHistory from "../components/PostsHistory";

export default {
  name: "machineLearningPage",
  components: {PostsHistory},
  data: () => ({
    //
    posts: [
      {
        postTitle: '미래학부 스터디',
        postLink: 'https://github.com/wiv33/A-Learning-python/tree/master/machine-learning/_000_hello_machine/_003_study_essential',
        postDescription: `tensorflow keras datasets으로 API 구현.
예제를 과제로 제공하며 학습 당일에 각자의 구현을 설명 및 새로운 시각의 구현하는 스터디`,
        postTags: 'mnist,sparse_categorical_crossentropy,categorical_crossentropy,Functional'.split(",")
      },
      {
        postTitle: '날씨와 음식의 상관관계 모델',
        postLink: 'https://colab.research.google.com/drive/12wL8vKWjFQNSs7fLuhUZImCAk0jl6uVT?usp=sharing',
        postDescription: `음식의 예측과 추천을 혼합하여 생각한 오류와 편향된 데이터 및 불필요한 데이터를 학습하여 효율적인 예측을 구현하지 못한 아쉬운 모델`,
        postTags: 'SKT data hub,강원도 치킨,군인,Robust,Standard,MinMax,RandomForest,SGD,Bagging,Voting,XGBoost'.split(",")
      },
      {
        postTitle: '금융 통화량 시각화',
        postLink: 'https://colab.research.google.com/drive/1qle_ItkDQ27PWjniuw-9HVo3C1lFvdBZ?usp=sharing',
        postDescription: `정부 정책과 금융권 통화량의 상관관계`,
        postTags: 'SKT data hub,seaborn,plt'.split(",")
      },
    ]
  }),
}
</script>

<style scoped>

</style>