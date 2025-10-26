import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  });

  const toggleTheme = () => {
    if (isDarkMode) {
      //luu tru theme vao localStorage cua trinh duyet
      //theme la key ligth & dark la value
      localStorage.setItem("theme", "ligth");
      //doan nay la xoa class dark trong DOM
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      //doan nay la them class dark vao DOM
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 p-2 z-50 right-5 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
