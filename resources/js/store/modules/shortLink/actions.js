const actions = {
   async createShortLink({commit, state},link) {
       await axios.post(`/api/short-link-create`,{link}).then((response) => {
           if(response.data.link){
               commit('UPDATE_LINKS',[...state.links,response.data.link])
           }
           console.log(response)
        }).catch((err)=>{
           console.log(err.message  )
       })
    },
    async getShortLinks({commit, state}) {
        await axios.post(`/api/short-links`).then((response) => {
            commit('UPDATE_LINKS',response.data.links)
        })
    },
    async getShortLinkByShort({commit, state},shortLink) {
        return await axios.get(`/api/short-link-show/${shortLink}`)
    }
};
export default actions;