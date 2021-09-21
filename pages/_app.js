import "../styles/globals.css";
import ThemeProvider from "../comps/theme/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
