import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import {
  IoHomeOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { ButtonProps } from "../../types";
import AppIcon from "../../assets/PayInvo.png";

const menuItems = [
  { name: "Dashboard", icon: IoHomeOutline, path: "/CreateInvoice" },
  { name: "Invoices", icon: CiSettings, path: "/CardList" },
];

const bottomItems = [
  { name: "Help", icon: IoHelpCircleOutline, path: "/Help" },
];

const NavHeader = () => (
  <header className="sidebar-header">
    <img src={AppIcon} alt="App Icon" className="app-icon" />
    <span className="app-name">PayInvo</span>
  </header>
);
const NavButton: FC<ButtonProps> = ({
  to,
  name,
  icon: IconComponent,
  isActive,
  onClick,
}) => (
  <Link
    to={to}
    className={`nav-button ${isActive ? "active" : ""}`}
    onClick={() => onClick(name)}
  >
    {IconComponent && <IconComponent className="icon" />}
    <span>{name}</span>
  </Link>
);

const Sidebar = ({ onLogout }: { onLogout: () => void }) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/Login");
  };

  return (
    <aside className="sidebar">
      <NavHeader />
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavButton
            key={item.name}
            to={item.path}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
            onClick={handleClick}
          />
        ))}
      </nav>
      <div className="sidebar-bottom">
        {bottomItems.map((item) => (
          <NavButton
            key={item.name}
            to={item.path}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
            onClick={handleClick}
          />
        ))}
        <button className="nav-button logout-button" onClick={handleLogout}>
          <IoLogOutOutline className="icon" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
