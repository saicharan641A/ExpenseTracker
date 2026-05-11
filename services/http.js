import axios from "axios";

const BASE_URL =
  "https://expense-tracker-app-665a4-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});