import axios from "../utils/http"
import base from "./base"

const api = {
    getBanner(type){
        return axios.get(base.baseUrl + base.banner + "?type=" + type );
    }
}

export default api;