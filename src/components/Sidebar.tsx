import React, { useState, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RouteContext } from "../context/RouteContext";
import "../App.css";
import SidebarMenu from "./SidebarMenu";

const Sidebar: React.FC = () => {
  const { routes } = useContext(RouteContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={{ width: isOpen ? "250px" : "45px" }}
      className="sidebar"
    >
      <div className="top-section">
        {isOpen && <div><h1>IDIGI</h1><h4>-Typescript</h4></div>}
        <div onClick={toggle}>|||</div>
      </div>
      <div className="routes">
        {routes.map((route:any, index: string) => { // Here I have added any and string type as of now
          if (route.subRoutes) {
            return <SidebarMenu key={index} route={route} />;
          }
          return route.name && !route.hideInMenu ? (
            <NavLink
              key={index}
              to={route.path}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <div className="link-text">{route.name}</div>
            </NavLink>
          ) : null;
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
