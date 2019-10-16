// Hooks
import usePersistedState from "./usePersistedState";

// Util
import { themes } from "../util/themes";

function userPrefersDark() {
  const darkMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  return darkMatcher.matches;
}

export default function useTheme() {
  const prefersDark = userPrefersDark();

  const [theme, setTheme] = usePersistedState(
    "theme",
    prefersDark ? "dark" : "light"
  );

  const updateTheme = theme => {
    //Adds transitions to the theme. @smells likely a cleaner way to do this here.
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
