import api from "../api";

export default {
    index: () => api.get("/songs").then((response) => response.data),
    songByName: (songname) => api.get(`/songs/${songname}`).then((response) => response.data),
    create: (payload) => api.post("/songs", payload).then((response) => response.data),
};
