import axios from "axios";
import qs from "qs";

export default axios.create({
    baseURL: process.env.API || "http://localhost:3333",
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: (params) => {
        return qs.stringify(params);
    },
});
