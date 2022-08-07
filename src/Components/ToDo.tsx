import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, ToDoId, ToDoState } from "../atoms";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  hr {
    margin-bottom: 10px;
  }
  margin-bottom: 20px;
`;

const ToDoCard = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  padding: 10px 10px;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10px;
  h3 {
    margin-bottom: 20px;
  }
`;

const TitleInput = styled.input`
  margin-bottom: 15px;
  padding: 5px 5px;
  width: calc(100% - 20px);
  height: 50px;
`;

const ContentInput = styled.input`
  margin-bottom: 15px;
  padding: 5px 5px;
  width: calc(100% - 20px);
  height: 100px;
`;

const BtnBoxList = styled.div<{ btnState: string }>`
  padding: 5px 10px;
  height: 30px;
  display: flex;
  justify-content: ${(props) =>
    props.btnState === "update" ? "flex-end" : "space-between"};
`;

const Button = styled.button`
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 5px;
  width: 60px;
  height: 100%;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
`;

const StateBtn = styled(Button)<{ btnState: string }>`
  :last-child {
    margin-left: ${(props) => (props.btnState === "update" ? "5px" : "0")};
  }
`;

const BtnList = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

function ToDo(toDo: IToDo) {
  const [state, setState] = useRecoilState(ToDoState);
  const [toDoId, setToDoId] = useRecoilState(ToDoId);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const stateCreate = () => {
    setState("create");
    setToDoId({
      title: "",
      content: "",
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };
  const stateUpdate = () => {
    setState("update");
  };
  const stateDetail = () => {
    setState("detail");
    setTitle(toDoId.title);
    setContent(toDoId.content);
  };
  return (
    <Wrapper>
      <hr />
      <h3>
        {state === "create"
          ? "Add To List"
          : state === "detail"
          ? "Detail"
          : "Update"}
      </h3>
      <ToDoCard>
        <h3>제목</h3>
        <TitleInput type="textarea" value={toDo.title}></TitleInput>
        <h3>내용</h3>
        <ContentInput type="textarea" value={toDo.content}></ContentInput>
        <BtnBoxList btnState={state}>
          {state === "create" && <StateBtn btnState={state}>추가</StateBtn>}
          {state === "detail" && (
            <>
              <StateBtn btnState={state} onClick={() => stateCreate()}>
                추가
              </StateBtn>
              <StateBtn btnState={state} onClick={() => stateUpdate()}>
                수정
              </StateBtn>
            </>
          )}
          {state === "update" && (
            <BtnList>
              <StateBtn btnState={state}>확인</StateBtn>
              <StateBtn btnState={state} onClick={() => stateDetail()}>
                취소
              </StateBtn>
            </BtnList>
          )}
        </BtnBoxList>
      </ToDoCard>
    </Wrapper>
  );
}

export default ToDo;
