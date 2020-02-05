<template>
    <div class="blue lighten-3 pa-3">
        <h1>User Component</h1>
        <p>Name: {{ name }}</p>
        <v-btn dark @click="changeName()">Change Name</v-btn>
        <hr>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <UserDetail :nameOfChild="name"></UserDetail>
            </v-flex>
            <v-flex xs12 sm6>
                <UserEdit></UserEdit>
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
                name: "Vue-JS"
            }
        },
        methods: {
            changeName() {
                this.name = "Hello Vue";
            }
        }
    }
</script>

<style scoped>

</style>