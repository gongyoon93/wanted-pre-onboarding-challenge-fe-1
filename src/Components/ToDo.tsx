import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { createToDo, deleteToDo, getToDosId, updateToDo } from "../api";
import { IToDo, refreshState, ToDoId, ToDoState } from "../atoms";

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
  height: 40px;
`;

const ContentInput = styled.input`
  margin-bottom: 15px;
  padding: 5px 5px;
  width: calc(100% - 20px);
  height: 65px;
`;

const BtnBoxList = styled.div<{ btnState: string }>`
  padding: 5px 10px;
  height: 30px;
  display: flex;
  justify-content: ${(props) =>
    props.btnState === "detail" ? "space-between" : "flex-end"};
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
  :first-child {
    margin-right: ${(props) => (props.btnState === "update" ? "5px" : "0")};
  }
  :last-child {
    margin-left: ${(props) => (props.btnState === "update" ? "5px" : "0")};
  }
`;

const BtnList = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

function ToDo() {
  const navigate = useNavigate();
  const [state, setState] = useRecoilState(ToDoState);
  const [toDoId, setToDoId] = useRecoilState(ToDoId);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setState("create");
      setTitle("");
      setContent("");
      setToDoId({
        title: "",
        content: "",
        id: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } else if (location.pathname.split("/")[2] === "detail") {
      setState("detail");
      (async () => {
        const data = await getToDosId(location.pathname.split("/")[1]);
        setTitle(data.data.data.title);
        setContent(data.data.data.content);
        setToDoId(data.data.data);
      })();
    } else if (location.pathname.split("/")[2] === "update") {
      setState("update");
      (async () => {
        const data = await getToDosId(location.pathname.split("/")[1]);
        setTitle(data.data.data.title);
        setContent(data.data.data.content);
        setToDoId(data.data.data);
      })();
    }
  }, [location.pathname]);
  const createToDos = () => {
    if (title.length === 0) {
      alert("제목을 입력하세요.");
      return;
    }
    if (content.length === 0) {
      alert("내용을 입력하세요.");
      return;
    }
    const data = { title: title, content: content };
    (async () => {
      await createToDo(data);
      alert("To Do가 등록되었습니다.");
      setTitle("");
      setContent("");
      setRefresh(!refresh);
    })();
  };

  const updateToDos = () => {
    if (title.length === 0) {
      alert("제목을 입력하세요.");
      return;
    }
    if (content.length === 0) {
      alert("내용을 입력하세요.");
      return;
    }
    const data = { title: title, content: content };
    (async () => {
      await updateToDo(data, toDoId.id);
      alert("To Do가 수정되었습니다.");
      setToDoId({
        title: title,
        content: content,
        id: toDoId.id,
        createdAt: toDoId.createdAt,
        updatedAt: new Date(),
      });
      setRefresh(!refresh);
    })();
  };

  const deleteToDos = () => {
    if (toDoId.id === "") {
      alert("To Do를 선택하세요.");
      return;
    }
    const data = { title: title, content: content };
    (async () => {
      await deleteToDo(toDoId.id);
      alert("To Do가 삭제되었습니다.");
      setRefresh(!refresh);
      navigate("/");
    })();
  };

  const [refresh, setRefresh] = useRecoilState(refreshState);
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
        <TitleInput
          type="textarea"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          readOnly={state === "detail" ? true : false}
        ></TitleInput>
        <h3>내용</h3>
        <ContentInput
          type="textarea"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          readOnly={state === "detail" ? true : false}
        ></ContentInput>
        <BtnBoxList btnState={state}>
          {state === "create" && (
            <StateBtn btnState={state} onClick={() => createToDos()}>
              추가
            </StateBtn>
          )}
          {state === "detail" && (
            <>
              <StateBtn btnState={state} onClick={() => navigate(`/`)}>
                추가
              </StateBtn>
              <StateBtn
                btnState={state}
                onClick={() => navigate(`/${toDoId.id}/update`)}
              >
                수정
              </StateBtn>
            </>
          )}
          {state === "update" && (
            <BtnList>
              <StateBtn btnState={state} onClick={() => updateToDos()}>
                확인
              </StateBtn>
              <StateBtn btnState={state} onClick={() => deleteToDos()}>
                삭제
              </StateBtn>
              <StateBtn
                btnState={state}
                onClick={() => navigate(`/${toDoId.id}/detail`)}
              >
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
