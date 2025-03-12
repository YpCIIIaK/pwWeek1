import React from "react";
import { Outlet } from "react-router-dom";
import "./PublicLayout.scss";

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <header className="public-layout__header">
        <h1>Публичная часть</h1>
      </header>
      <main className="public-layout__content">
        <Outlet />
      </main>
      <footer className="public-layout__footer">
        <p>© 2025</p>
      </footer>
    </div>
  );
};

export default PublicLayout;
