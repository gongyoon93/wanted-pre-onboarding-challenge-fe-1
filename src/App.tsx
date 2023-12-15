import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Auth from "./Components/hoc/auth";
import ListPage from "./Pages/List";
import LoginPage from "./Pages/Login";
import RegistPage from "./Pages/Regist";

function App() {
  const AuthListPage = Auth(ListPage, true);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegistPage = Auth(RegistPage, false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/Regist"} element={<AuthRegistPage />} />
        <Route path={"/Login"} element={<AuthLoginPage />} />
        <Route path={"/"} element={<AuthListPage />}>
          <Route path={"/:id/update"} element={<AuthListPage />} />
          <Route path={"/:id/detail"} element={<AuthListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
