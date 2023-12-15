import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getToDos } from "../api";
import { IToDo, IToDos, refreshState } from "../atoms";
import ToDo from "../Components/ToDo";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 120px;
  height: 40px;
  padding: 10px 20px;
  cursor: pointer;
`;

const ToDoListWrapper = styled.div`
  padding: 20px 10px;
  padding-bottom: 0;
  width: calc(100% - 20px);
  height: 590px;
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 25px;
`;

const ToDoList = styled.ul`
  list-style: none;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  height: calc(100% - 40px);
  padding: 0 10px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ToDoCard = styled.li`
  border: 3px solid black;
  border-radius: 5px;
  padding: 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  cursor: pointer;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 20px;
  }
`;

const TitleBox = styled.div`
  width: calc(100% - 20px);
  margin-bottom: 20px;
  overflow: hidden;
  height: 43px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: break-word;
`;

const ContentBox = styled.div`
  width: calc(100% - 20px);
  margin-bottom: 20px;
  height: 31px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: break-word;
  padding: 15px 10px;
  margin-bottom: 0;
  border: 1px solid black;
  border-radius: 5px;
`;

const ToDoTitleForm = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;

function List() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("Authorization");
    alert("로그아웃 되었습니다.");
    navigate("/Login");
  };
  const refresh = useRecoilValue(refreshState);

  const { data: toDoList, isLoading: toDoListLoading } = useQuery<IToDos>(
    ["ToDos", "List"],
    () => getToDos(),
    {
      initialData: () => [],
      onSuccess: (data) => {
        console.log(`data ${toDoList}`);
      },
      onError: (error) => {
        alert("로그인정보가 존재하지 않습니다.");
      },
    }
  );
  return (
    <Container>
      <ToDoListWrapper>
        <Title>To Do List</Title>
        <ToDoList>
          {toDoList.map((toDo: IToDo) => (
            <ToDoCard
              key={toDo.id}
              onClick={() => navigate(`/${toDo.id}/detail`)}
            >
              <h3>제목</h3>
              <TitleBox>{toDo.title}</TitleBox>
              <h3>내용</h3>
              <ContentBox>{toDo.content}</ContentBox>
            </ToDoCard>
          ))}
        </ToDoList>
      </ToDoListWrapper>
      <ToDo />
      <Btn onClick={() => logout()}>로그아웃</Btn>
    </Container>
  );
}

export default List;
