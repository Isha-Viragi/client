import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routers from "./services/Routers";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
