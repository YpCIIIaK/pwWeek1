import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import "./PrivateLayout.scss";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; // Пример
};

const PrivateLayout = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="private-layout">
      <header className="private-layout__header">
        <h1>Личный кабинет</h1>
      </header>
      <nav className="private-layout__nav">
        <ul>
          <li>
            <a href="/dashboard">Главная</a>
          </li>
          <li>
            <a href="/profile">Профиль</a>
          </li>
          <li>
            <a href="/logout">Выход</a>
          </li>
        </ul>
      </nav>
      <main className="private-layout__content">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
