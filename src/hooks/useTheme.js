import { useState } from "react";

// Hooks
import useLocalStorage from "./useLocalStorage";

// Util
import { themes } from "../util/themes";

function userPrefersDark() {
  //@todo this is probably bad because we want to grab the raw value not just check if they prefer dark.
  //They might prefer colorblind, etc.
  const darkMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  return darkMatcher.matches;
}

export default function useTheme() {
  const prefersDark = userPrefersDark();

  const [storedTheme, storeTheme] = useLocalStorage(
    "theme",
    prefersDark ? "dark" : "light"
  );

  const [theme, setTheme] = useState(storedTheme);

  const updateTheme = theme => {
    //Store the theme in localstorage
    storeTheme(theme);

    //Adds transitions to the theme. @todo likely a cleaner way to do this here.
    //Can we just enable this from the start?
    document.documentElement.classList.add("color-theme-in-transition");

    //Update state
    setTheme(theme);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      updateTheme("dark");
    } else {
      updateTheme("light");
    }
  };

  //Theme object, toggle theme function, theme string.
  return [themes[theme], toggleTheme, theme];
}
