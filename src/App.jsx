import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/publicL/PublicLayout.jsx";
import PrivateLayout from "./layouts/privateL/PrivateLayout.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import ProfilePage from "./pages/Profile/ProfilePage.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
