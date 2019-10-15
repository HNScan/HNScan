import { useState } from "react";
import { themes } from "../util/themes";

export default function useTheme() {

  //Configure theme via useState
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme || "light";
  });

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  switch (theme) {
    case "light":
      return [themes["light"], toggleTheme];
    case "dark":
      return [themes["dark"], toggleTheme];
    default:
      return [themes["light"], toggleTheme];
  }
}

  // document.documentElement.classList.add("color-theme-in-transition");
  // if (localStorage.getItem("theme") === "light") {
  //   localStorage.setItem("theme", "dark");
  //   document.documentElement.setAttribute("data-theme", "dark");
  // } else {
  //   localStorage.setItem("theme", "light");
  //   document.documentElement.removeAttribute("data-theme", "dark");
  // }

  // let theme = localStorage.getItem("theme");
  // if (!theme) {
  //   localStorage.setItem("theme", "light");
  //   theme = "light";
  // }

// import React, { Component } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { themes } from '../themes';

// export const ThemeToggleContext = React.createContext({ undefined })

// function toggleTheme() {
//   document.documentElement.classList.add("color-theme-in-transition");
//   if (localStorage.getItem("theme") === "light") {
//     localStorage.setItem("theme", "dark");
//     document.documentElement.setAttribute("data-theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//     document.documentElement.removeAttribute("data-theme", "dark");
//   }

//   setTimeout(() => {
//     document.documentElement.classList.remove("color-theme-in-transition");
//   }, 1000);
//   return localStorage.getItem("theme");
// }

// class ThemeContext extends Component {
//   constructor(props) {
//     super(props);

//     if (!localStorage.getItem("theme")) {
//       localStorage.setItem("theme", "light");
//     }

//     this.toggleTheme = () => {
//       let theme = toggleTheme();
//       this.setState(state => ({
//         isDark: theme === 'dark',
//         theme: theme,
//         themeObj: themes[theme]
//       }))
//     }

//     this.state = {
//       isDark: localStorage.getItem("theme") === 'dark',
//       theme: localStorage.getItem("theme"),
//       themeObj: themes[localStorage.getItem("theme")],
//       toggleTheme: this.toggleTheme
//     };

//     if (this.state.isDark) document.documentElement.setAttribute("data-theme", "dark");
//   }

//   render() {
//     return (
//       <ThemeToggleContext.Provider value={{ ...this.state, toggleTheme: this.state.toggleTheme}}>
//         <ThemeProvider theme={this.state.themeObj}>
//           {this.props.children}
//         </ThemeProvider>
//       </ThemeToggleContext.Provider>
//     )
//   }
// }

// ThemeContext.contextType = ThemeToggleContext;
// export default ThemeContext;
