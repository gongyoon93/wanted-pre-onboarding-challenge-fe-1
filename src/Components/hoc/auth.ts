import React, { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ToDoState } from "../../atoms";

export default function (WrappedComponent: any, option: boolean) {
  const setState = useSetRecoilState(ToDoState);
  // const authLocation = useLocation();
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck() {
    const navigate = useNavigate();
    useEffect(() => {
      //로그인 하지 않은 상태
      if (!localStorage.getItem("Authorization")) {
        if (option) {
          navigate("/Login");
        }
      } else {
        //로그인 한 상태
        try {
          if (!option) {
            navigate("/");
          }
        } catch (e) {
          navigate("/");
        }
      }
    }, []);

    return WrappedComponent();
  }
  return AuthenticationCheck;
}
// 고차 컴포넌트
