<template>
    <div class="red lighten-3 pa-3">
        <h3>회원정보 확인</h3>
        <p>{{ nameOfChild }}</p>
        <p>{{ helloWorld }}</p>
        <v-btn @click="switchName()">Change Name!!</v-btn>

        <v-list dense>
            <v-list-item>
                <v-list-item-content>이름:</v-list-item-content>
                <v-list-item-content class="align-end">{{ name }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>이름:</v-list-item-content>
                <v-list-item-content class="align-end">{{ address }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>전화번호:</v-list-item-content>
                <v-list-item-content class="align-end">{{ phone }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>반려견 유무:</v-list-item-content>
                <v-list-item-content class="align-end">{{ hasDogFunc }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>수정 일자:</v-list-item-content>
                <v-list-item-content class="align-end">{{ editedDate }}</v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        name: "UserDetail",
        /* parent 가 보내준 name 을 nameOfChild 로 받는다. */
        props: ['name', 'address', 'phone', 'hasDog', 'nameOfChild'],
        data() {
            return {
                editedDate: null
            }
        },
        computed: {
            helloWorld() {
                return this.nameOfChild + " plus";
            },
            hasDogFunc() {
                return this.hasDog ? "있음" : "없음"
            }
        },
        methods: {
            switchName() {
                this.nameOfChild = "switch";
            }
        },
        created() {
            eventBus.$on('userWasEdited', (dateParam) => {
                this.editedDate = dateParam;
                window.console.log(dateParam);
            })
        }
    }
</script>

<style scoped>

</style>