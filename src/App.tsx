import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { MainPage } from "./pages/mainPage/MainPage";
import { Layout } from "./components/Layout/Layout";
import { CartPage } from "./pages/cartPage/CartPage";
import { MakingOrderPage } from "./pages/makingOrderPage/MakingOrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/main"} element={<MainPage />} />
          <Route path={"/cart"} element={<CartPage />} />
          <Route path={"/order"} element={<MakingOrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
