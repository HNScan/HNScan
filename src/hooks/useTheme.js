import { useState } from "react";

//Hooks
import useLocalStorage from "./useLocalStorage";

// Util
import { themes } from "../util/themes";

export default function useTheme() {
  const [storedTheme, storeTheme] = useLocalStorage("theme", "light");

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

  return [themes[theme], toggleTheme];
}
