<template>
    <div class="red lighten-3 pa-3">
        <h3>회원정보 확인</h3>
        <p>{{ nameOfChild }}</p>
        <p>{{ helloWorld }}</p>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        /* parent 가 보내준 name 을 nameOfChild 로 받는다. */
        props: {
            nameOfChild: {
                type: String,
                // required: true,
                default: "PROTOCOL"
            }
        },
        data() {
            return {

            }
        },
        computed: {
            helloWorld() {
                return this.nameOfChild + " plus";
            }
        }
    }
</script>

<style scoped>

</style>