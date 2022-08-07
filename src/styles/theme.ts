import { DefaultTheme } from "styled-components";

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
};

export const theme: DefaultTheme = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};
