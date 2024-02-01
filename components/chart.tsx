"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeAwareChart = () => {
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
        <Image src="/chart-dark.png" height={150} width={700} alt="chart" />
      ) : (
        <Image src="/chart.png" height={150} width={700} alt="chart" />
      )}
    </div>
  );
};

export default ThemeAwareChart;
