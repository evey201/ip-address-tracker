import axios from "axios";

const options = {
  baseURL: `https://ifconfig.co`,
  headers: {
    Accept: "application/json,text/plain,*/*",
    "Content-Type": "application/json",
  },

};

export const request = axios.create(options);
