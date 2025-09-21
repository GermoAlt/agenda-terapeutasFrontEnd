import type React from "react";
import "./NavBar.css";
import { AlignJustify } from "lucide-react";
import { InputSelect } from "../InputSelect/InputSelect";

interface AnchorItem {
  label: string;
  href: string;
}

export const NavBar: React.FC = () => {
  const anchorItems: AnchorItem[] = [
    { label: "Home", href: "/" },
    { label: "Sessions", href: "/sessions" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "contact" },
  ];

  const PERIODICITY_ITEMS = [
    { text: "Daily", value: "daily" },
    { text: "Weekly", value: "weekly" },
    { text: "Monthly", value: "monthly" },
    { text: "Yearly", value: "yearly" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="mobile-nav">
            <AlignJustify />
          </div>
          <div className="desktop-nav">
            {anchorItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <InputSelect
            items={PERIODICITY_ITEMS}
            initialValue={{ text: "Periodicity", value: "" }}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </nav>
  );
};
