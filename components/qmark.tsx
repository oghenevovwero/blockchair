"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeAwareQmarkIcon = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);
  return (
    <div>
      {isDarkMode ? (
        <Image src="/qmark-dark.svg" height={18} width={18} alt="copy" />
      ) : (
        <Image src="/qmark.svg" height={18} width={18} alt="copy" />
      )}
    </div>
  );
};

export default ThemeAwareQmarkIcon;
