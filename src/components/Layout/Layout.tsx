import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/main");
  }, []);

  return (
    <>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button onClick={(e) => navigate("/main")}>shop</button>
        <button onClick={(e) => navigate("/cart")}>cart</button>
      </div>
      <Outlet />
    </>
  );
};
