import axios from "axios";
import { IForm } from "./atoms";
const BASE_URL = "http://localhost:8080";

export function loginUser(dataToSubmit: IForm) {
  return axios.post(`${BASE_URL}/users/login`, dataToSubmit);
}

export function registUser(dataToSubmit: IForm) {
  return axios.post(`${BASE_URL}/users/create`, dataToSubmit);
}

export function getToDos() {
  const token = localStorage.getItem("Authorization")
    ? `Bearer ${localStorage.getItem("Authorization")}`
    : undefined;
  const headers = token
    ? { headers: { Authorization: token, "Content-Type": "application/json" } }
    : undefined;
  return axios
    .get(`${BASE_URL}/todos`, headers)
    .then((res) => res)
    .catch((res) => res);
}

export function getToDosId(id: string) {
  const token = localStorage.getItem("Authorization")
    ? `Bearer ${localStorage.getItem("Authorization")}`
    : undefined;
  const headers = token
    ? { headers: { Authorization: token, "Content-Type": "application/json" } }
    : undefined;
  return axios
    .get(`${BASE_URL}/todos/${id}`, headers)
    .then((res) => res)
    .catch((res) => res);
}
