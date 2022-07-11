import { lazy, Suspense } from "react";
import { useTheme } from "./use-theme";

const DarkTheme = lazy(() => import("./dark"));
const LightTheme = lazy(() => import("./light"));

export const ThemeProvider = ({ children }) => {
  const [darkMode] = useTheme();

  console.log({darkMode});

  return (
    <>
      <Suspense fallback={<span />}>
        {darkMode ? <DarkTheme /> : <LightTheme />}
      </Suspense>
      {children}
    </>
  );
};