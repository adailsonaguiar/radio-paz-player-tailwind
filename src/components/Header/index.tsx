import React from "react";
import { ToggleTheme } from "../ToggleTheme";

const Header: React.FC = () => {

  return (
    <header className="py-10 flex justify-between px-10">
      <h1 className="text-xl font-semibold text-sky-500 text-center">
        Rádio Paz FM
      </h1>
     <ToggleTheme/>
    </header>
  );
};

export default Header;
