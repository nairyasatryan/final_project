import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTg2NWM1NTIwMjZmOGMzNjQzNDM3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTA5OTMyMCwiZXhwIjoxNjcxMzU4NTIwfQ.JLmdNTLi0PTB0PpIrmezLGHsxuM8b3O0wuB9x1SBixw"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});