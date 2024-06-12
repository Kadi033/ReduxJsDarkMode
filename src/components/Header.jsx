import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../store/reducers/themeReducer"; // Make sure to import the action from the correct path
import { header, moon, sun } from "../assets";

function Header() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const [isDarkMode, setDarkMode] = useState(currentTheme === "dark");

  const toggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setDarkMode(!isDarkMode);
    dispatch(updateTheme(newTheme)); // Dispatch the updateTheme action with the new theme value
  };

  return (
    <div className="text-white flex justify-center ">
      <img src={header} className="w-full relative" />
      <div className="flex justify-between absolute top-0 w-10/12 h-full max-h-[150px] items-center">
        <h1 className="text-5xl font-bold">devjobs</h1>
        <div className="flex gap-6 items-center">
          <h1>Theme Mode</h1>
          {!isDarkMode ? (
            <div>
              <img
                src={sun}
                onClick={toggle}
                className="icon object-contain w-8 h-8 cursor-pointer"
              />
            </div>
          ) : (
            <img
              src={moon}
              onClick={toggle}
              className="icon object-contain w-8 h-8 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
