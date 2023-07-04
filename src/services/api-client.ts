import axios, { AxiosRequestConfig } from "axios";

export interface Fetchresponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11d3db7bd6fd4e3e9195cfc773f09266",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Fetchresponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
//1. We call axios.create to create an axios instance
// with a custom cofiguration.
//2. With this configuration, the key will be included in
// the query string of every HTTP request we send to our backend.
