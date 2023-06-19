import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React from "react";

export const ToggleTheme: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((r) => !r);
  };

  return (
    <button onClick={toggle}>
      {isDark ? (
        <MoonIcon className="h-8 text-sky-500" />
      ) : (
        <SunIcon className="h-8 text-sky-500" />
      )}
    </button>
  );
};
