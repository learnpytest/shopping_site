import axios from "axios";

// todo update baseURL to real baseURL
const baseURL = "http://localhost:3000/api";

export const apiHelper = axios.create({
  baseURL,
});