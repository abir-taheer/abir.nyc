import theme from "./theme";
import { ThemeProvider as Provider } from "@mui/material/styles";

export default function ThemeProvider({ children }) {
  return <Provider theme={theme}>{children}</Provider>;
}
