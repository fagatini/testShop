import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout: FC = () => {
  const [numcart, setNumcart] = useState<string>("0");
  const navigate = useNavigate();
  useEffect(() => {
    setNumcart(localStorage.getItem("numcart") || "0");
    navigate("/main");
  }, []);

  return (
    <>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button onClick={(e) => navigate("/main")}>shop</button>
        <button onClick={(e) => navigate("/cart")}>cart {numcart}</button>
      </div>
      <Outlet />
    </>
  );
};
