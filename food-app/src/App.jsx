import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import RestaurantPage from "./pages/RestaurantPage";
import NotFoundPage from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/error" element={<NotFoundPage />} />

        {/* <Route path="/register" element={<UserOptionPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
