import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Auth from "./hoc/auth";
import ListPage from "./Routes/List";
import LoginPage from "./Routes/Login";
import RegistPage from "./Routes/Regist";

function App() {
  const AuthListPage = Auth(ListPage, true);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegistPage = Auth(RegistPage, false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/Regist"} element={<AuthRegistPage />} />
        <Route path={"/Login"} element={<AuthLoginPage />} />
        <Route path={"/:id/update"} element={<AuthListPage />} />
        <Route path={"/:id/detail"} element={<AuthListPage />} />
        <Route path={"/"} element={<AuthListPage />} />
        {/* <Main /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
