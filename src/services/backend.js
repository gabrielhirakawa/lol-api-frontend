import axios from "axios";

const api = axios.create({
  baseURL: "https://lol-stats-br.herokuapp.com/",
});

export default api;
