import axios from "../utils/http"
import base from "./base"

const api = {
    getBanner(){
        return axios.get(base.baseUrl + base.banner  );
    }
}

export default api;