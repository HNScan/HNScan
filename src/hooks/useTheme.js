import { useState } from "react";

// Hooks
import useLocalStorage from "./useLocalStorage";

// Util
import { themes } from "../util/themes";

function userPrefersDark() {
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

    //Remove the transition class after theme has transitioned.
    //@smells -> Slight code smell, but don't see a better way to do this as of right now.
    setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
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
