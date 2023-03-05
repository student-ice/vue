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
    }
}

export default api;