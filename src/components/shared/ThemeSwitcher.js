import React from "react";
import { Select, useTheme } from "@urkellabs/ucl";

export default function ThemeSwitcher(props) {
  let [, toggleTheme, current] = useTheme();

  let options = [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" }
  ];

  return (
    <Select
      options={options}
      defaultValue={
        options.find(element => element.value === current) || options[0]
      }
      onChange={toggleTheme}
    />
  );
}
