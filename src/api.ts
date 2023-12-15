import axios from "axios";
import { ICUToDos, IForm } from "./atoms";
const BASE_URL = "http://localhost:8080";

export function loginUser(dataToSubmit: IForm) {
  return axios.post(`${BASE_URL}/users/login`, dataToSubmit);
}

export function registUser(dataToSubmit: IForm) {
  return axios.post(`${BASE_URL}/users/create`, dataToSubmit);
}

const token = localStorage.getItem("Authorization")
  ? `Bearer ${localStorage.getItem("Authorization")}`
  : undefined;
const headers = token
  ? { headers: { Authorization: token, "Content-Type": "application/json" } }
  : undefined;

export function getToDos() {
  return axios
    .get(`${BASE_URL}/todos`, headers)
    .then((res) => res)
    .catch((res) => res);
}

export function getToDosId(id: string) {
  return axios
    .get(`${BASE_URL}/todos/${id}`, headers)
    .then((res) => res)
    .catch((res) => res);
}

export function createToDo(data: ICUToDos) {
  return axios
    .post(`${BASE_URL}/todos`, data, headers)
    .then((res) => res)
    .catch((res) => res);
}

export function updateToDo(data: ICUToDos, id: string) {
  return axios
    .put(`${BASE_URL}/todos/${id}`, data, headers)
    .then((res) => res)
    .catch((res) => res);
}

export function deleteToDo(id: string) {
  return axios
    .delete(`${BASE_URL}/todos/${id}`, headers)
    .then((res) => res)
    .catch((res) => res);
}
