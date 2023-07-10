import React, { useState } from "react";
import "../App.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface Route {
  name: string;
  icon: JSX.Element;
  path: string;
  subRoutes: SubRoute[];
}

interface SubRoute {
  name: string;
  icon: JSX.Element;
  path: string;
}

interface SidebarMenuProps {
  route: Route;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ route }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-item">
          <div className="icon">{route.icon}</div>
          <div className="link-text">{route.name}</div>
        </div>
        <div className="arrow">
          {isOpen ? (
            <FaAngleDown onClick={toggle} />
          ) : (
            <FaAngleRight onClick={toggle} />
          )}
        </div>
      </div>
      {isOpen &&
        route.subRoutes.map((subRoute, index) => {
          return (
            <NavLink
              key={index}
              to={subRoute.path}
              
              className="sub-link"
            >
              <div className="icon">{subRoute.icon}</div>
              <div className="link-text">{subRoute.name}</div>
            </NavLink>
          );
        })}
    </div>
  );
};

export default SidebarMenu;
