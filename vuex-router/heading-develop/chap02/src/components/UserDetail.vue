<template>
    <div class="red lighten-3 pa-3">
        <h3>회원정보 확인</h3>
        <p>{{ nameOfChild }}</p>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        props: ['nameOfChild'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>