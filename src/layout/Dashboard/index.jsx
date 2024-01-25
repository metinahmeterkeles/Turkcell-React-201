import React from "react";
import Menu from "../../Components/Menu";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <Menu />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
