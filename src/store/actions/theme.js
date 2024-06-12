export const updateTheme = (theme) => {
  return {
    type: "UPDATE_THEME",
    playload: {
      theme,
    },
  };
};
