import React from "react";
import styled from "styled-components";
import { IToDos } from "../atoms";

const Wrapper = styled.div`
  padding: 20px 10px;
  width: calc(100% - 20px);
  height: 560px;
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 25px;
`;

const List = styled.ul`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  height: 100%;
  padding: 20px 10px;
`;

const Card = styled.li`
  border: 1px solid black;
  border-radius: 5px;
`;

function ToDoList(toDos: IToDos) {
  console.log("toDos", toDos);
  console.log(Array.isArray(toDos));
  return (
    <Wrapper>
      <Title>To Do List</Title>
      <List>
        {/* {toDos.map((toDo) => (
          <Card key={toDo.id}>{toDo.title}</Card>
        ))} */}
      </List>
    </Wrapper>
  );
}

export default React.memo(ToDoList);
