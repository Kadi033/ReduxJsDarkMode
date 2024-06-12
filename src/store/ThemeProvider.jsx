import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const themeState = useSelector((state) => state.theme);

  useEffect(() => {
    setTheme(themeState.theme);
  }, [themeState]);

  const themeVariable = {
    light: {
      primaryColor: "#ffffff",
      secondaryColor: "#121721",
    },
    dark: {
      primaryColor: "#121721",
      secondaryColor: "#ffffff",
    },
  };

  const rootStyle = {
    background: themeVariable[theme].primaryColor,
    color: themeVariable[theme].secondaryColor,
  };

  return (
    <div className="root" style={rootStyle}>
      {children}
    </div>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
