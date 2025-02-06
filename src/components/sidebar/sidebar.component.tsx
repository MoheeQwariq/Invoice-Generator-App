import { FC, useState } from "react";
import "./sidebar.component.css";
import { IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoHelpCircleOutline, IoLogOutOutline } from "react-icons/io5"; // New icons

const menuItems = [
  { name: "Dashboard", icon: IoHomeOutline },
  { name: "Invoices", icon: CiSettings },
];

const bottomItems = [
  { name: "Help", icon: IoHelpCircleOutline },
  { name: "Logout", icon: IoLogOutOutline },
];

const NavHeader = () => (
  <header className="sidebar-header">
    <span>PayInvo</span>
  </header>
);

type ButtonProps = {
  onClick: (item: string) => void;
  name: string;
  icon?: React.ElementType;
  isActive: boolean;
};

const NavButton: FC<ButtonProps> = ({ onClick, name, icon: IconComponent, isActive }) => (
  <button type="button" onClick={() => onClick(name)} className={`nav-button ${isActive ? "active" : ""}`}>
    {IconComponent && <IconComponent className="icon" />}
    <span>{name}</span>
  </button>
);

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (item: string) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="sidebar">
      <NavHeader />
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavButton key={item.name} onClick={handleClick} name={item.name} icon={item.icon} isActive={activeItem === item.name} />
        ))}
      </nav>
      <div className="sidebar-bottom">
        {bottomItems.map((item) => (
          <NavButton key={item.name} onClick={handleClick} name={item.name} icon={item.icon} isActive={activeItem === item.name} />
        ))}
      </div>
    </aside>
  );
};
