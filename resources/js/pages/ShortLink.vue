<template>
    <div>

    </div>
</template>
<script>
    export default {
        async mounted(){
           await this.$store.dispatch('moduleShortLink/getShortLinkByShort',this.$route.params.shortLink).then((response)=>{
               if(!response.data.link.id){
                 this.$router.push({name:'home'})
               }else{

                   window.location.href = response.data.link.link
               }
           })
        }
    }

</script>