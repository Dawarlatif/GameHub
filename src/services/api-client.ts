import axios from "axios";
// sets the base url to rawg api base url 'https://api.rawg.io/api' results in improved Api calling.
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'da818309f57f4ebb96f2ba19a1dc5b9b',

    }
})