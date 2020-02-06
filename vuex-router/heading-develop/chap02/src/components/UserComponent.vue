<template>
    <div class="blue lighten-3 pa-3">
        <h1>User Component</h1>
        <p>Name: {{ name }}</p>
        <v-btn dark @click="changeName()">Change Name</v-btn>
        <hr>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <!--
                    자식의 props 배열에 선언된 nameOfChild 와 바인딩 선언.
                    바인딩 된 속성에 부모 값인 name 을 대입.
                 -->
<!--                <UserDetail :name-of-child="name"></UserDetail>-->
                <UserDetail
                        :name="name"
                        :address="address"
                        :phone="phone"
                        :hasDog="hasDog"
                ></UserDetail>
            </v-flex>
            <v-flex xs12 sm6>
                <UserEdit
                        :name="name"
                        :address="address"
                        :phone="phone"
                        :hasDog="hasDog"
                        @child="parents"
                ></UserEdit>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import UserEdit from "./UserEdit";
    import UserDetail from "./UserDetail";

    export default {
        name: "UserComponent",
        components: {
            UserDetail, UserEdit
        },
        data() {
            return {
                name: "Vue-JS",
                address: "Seoul",
                phone: "10-5252-2323",
                hasDog: true
            }
        },
        methods: {
            changeName() {
                this.name = "Hello Vue";
            },
            parents(user) {
                this.name = user.name;
                this.address = user.address;
                this.phone = user.phone;
                this.hasDog = user.hasDog;
                window.console.log(user);
            }
        }
    }
</script>

<style scoped>

</style>