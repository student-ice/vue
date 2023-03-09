import axios from "../utils/http"
import base from "./base"

const api = {
    getBanner(type){
        return axios.get(base.baseUrl + base.banner + "?type=" + type );
    },
    getPersonalized(count){
        return axios.get(base.baseUrl + base.personalized + "?limit=" + count);
    },
    getPersonalizedNewSongs(count){
        return axios.get(base.baseUrl + base.personalizedNewSongs + "?limit=" + count);
    },
    getMusicUrl(id){
        return axios.get(base.baseUrl + base.musicUrl + "?id=" + id + "&level=exhigh");
    },
    getMusicDetail(id){
        return axios.get(base.baseUrl + base.musicDetail + "?ids=" + id);
    },
    getMusicListDetail(id){
        return axios.get(base.baseUrl + base.musicListDetail + "?id=" + id);
    }
}

export default api;