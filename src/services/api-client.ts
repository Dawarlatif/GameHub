import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'da818309f57f4ebb96f2ba19a1dc5b9b',

    }
})