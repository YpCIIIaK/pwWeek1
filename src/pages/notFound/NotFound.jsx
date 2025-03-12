import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Страница не найдена</p>
      <Link to="/" className="not-found__link">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
