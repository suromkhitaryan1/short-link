<template>
    <v-container>
        <v-row>
            <v-col cols="10"   offset-md="1">
                <Form/>

            </v-col>
            <v-col cols="8"   offset-md="1">

                <Table/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import Form from '../components/Form'
    import Table from '../components/Table'

    export default {
        components: {Form, Table},
        created(){
            this.$store.dispatch('moduleShortLink/getShortLinks')
        }
    }
</script>