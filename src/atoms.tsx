import { atom } from "recoil";

export interface IForm {
  email: string;
  password: string;
}

export interface IToDo {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IToDos extends Array<IToDo> {}

export interface ICUToDos {
  title: string;
  content: string;
}

export const ToDoState = atom<string>({
  key: "ToDoState",
  default: "create",
});

export const ToDoId = atom<IToDo>({
  key: "ToDoId",
  default: {
    title: "",
    content: "",
    id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});

export const refreshState = atom<boolean>({
  key: "refreshState",
  default: false,
});
