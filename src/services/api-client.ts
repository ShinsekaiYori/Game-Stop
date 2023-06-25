import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11d3db7bd6fd4e3e9195cfc773f09266",
  },
});

//1. We call axios.create to create an axios instance
// with a custom cofiguration.
//2. With this configuration, the key will be included in
// the query string of every HTTP request we send to our backend.
