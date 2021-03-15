<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col
                        cols="8"

                >
                    <v-text-field
                            :rules="rules"
                            v-model="link"
                            label="Short link"
                            placeholder="Short link"
                            outlined
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-btn
                            class="ma-2 mt-2"
                            outlined
                            color="indigo"
                            @click="saveHandler"
                    >
                        Save
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
    export default {
        data() {
            return {
                link: '',
                rules: [
                    (value) => !!value || "Required URL.",
                    (value) => this.isURL(value) || "URL is not valid",
                ],
            }
        },
        methods: {
            saveHandler() {
                 this.$store.dispatch('moduleShortLink/createShortLink',this.link).catch((err)=>{
                     console.log(err.errors)
                 })
            },
            isURL(str) {
                let url;

                try {
                    url = new URL(str);
                } catch (_) {
                    return false;
                }

                return url.protocol === "http:" || url.protocol === "https:";
            },
        }
    }
</script>