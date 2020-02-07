<template>
    <div class="yellow lighten-3 pa-3">
        <h3>회원 정보 수정</h3>
        <p>수정 사항</p>
        <v-text-field
                label="이름"
                v-model="user.name"
        ></v-text-field>
        <v-text-field
                label="주소"
                v-model="user.address"
        ></v-text-field>
        <v-text-field
                label="번호"
                v-model="user.phone"
        ></v-text-field>
        <v-radio-group v-model="user.hasDog">
            <v-radio label="반려견 있음" value="true"></v-radio>
            <v-radio label="반려견 없음" value="false"></v-radio>
        </v-radio-group>
        <v-btn root @click="changeUser">수정 완료</v-btn>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        name: "UserEdit",
        props: ['name', 'address', 'phone', 'hasDog'],
        data() {
            return {
                user: {}
            }
        },
        created() {
            let user = this.user;
            user.name = this.name;
            user.address = this.address;
            user.phone = this.phone;
            user.hasDog = this.hasDog;
        },
        methods: {
            changeUser() {
                this.$emit('child', this.user);
                // eventBus.$emit('userWasEdited', new Date())
                eventBus.userWasEditedFunc(new Date());
            }
        }
    }
</script>

<style scoped>

</style>