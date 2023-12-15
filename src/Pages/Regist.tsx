import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registUser } from "../api";
import { IForm } from "../atoms";
import { useNavigate } from "react-router-dom";

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

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 10px;
  padding-bottom: 0;
  input {
    padding: 10px 20px;
    margin-bottom: 20px;
  }
  button {
    margin-bottom: 20px;
  }
  span {
    color: red;
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
`;

const Btn = styled.button`
  width: 120px;
  height: 40px;
  padding: 10px 20px;
  cursor: pointer;
`;

function Regist() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = async (data: IForm) => {
    await registUser(data)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((res) => {
        alert(
          res.response.data
            ? res.response.data.details
            : "회원가입에 실패했습니다."
        );
      });
  };
  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "이메일은 '@', '.'가 포함 되어야 합니다.",
            },
          })}
          placeholder="이메일을 입력하세요."
        ></Input>
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          type="password"
          {...register("password", {
            required: "패스워드를 입력하세요.",
            minLength: {
              value: 8,
              message: "패스워드를 8자리 이상 입력해야 합니다.",
            },
          })}
          placeholder="패스워드를 입력하세요."
        ></Input>
        {errors.password && <span>{errors.password.message}</span>}
        <Btn type="submit">회원가입</Btn>
      </Form>
      <Link to={"/Login"}>
        <Btn>로그인</Btn>
      </Link>
    </Container>
  );
}

export default Regist;
