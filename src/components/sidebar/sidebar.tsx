import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { IoHomeOutline, IoHelpCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const menuItems = [
  { name: "Dashboard", icon: IoHomeOutline, path: "/CreateInvoice" },
  { name: "Invoices", icon: CiSettings, path: "/AllInvoices" },
];

const bottomItems = [
  { name: "Help", icon: IoHelpCircleOutline, path: "/Help" },
  { name: "Logout", icon: IoLogOutOutline, path: "/Login" },
];

const NavHeader = () => (
  <header className="sidebar-header">
    <span>PayInvo</span>
  </header>
);

type ButtonProps = {
  to: string;
  name: string;
  icon?: React.ElementType;
  isActive: boolean;
  onClick: (item: string) => void;
};

const NavButton: FC<ButtonProps> = ({ to, name, icon: IconComponent, isActive, onClick }) => (
  <Link to={to} className={`nav-button ${isActive ? "active" : ""}`} onClick={() => onClick(name)}>
    {IconComponent && <IconComponent className="icon" />}
    <span>{name}</span>
  </Link>
);

 const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: string) => {
    setActiveItem(item);
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
      </div>
    </aside>
  );
};
export default Sidebar;
