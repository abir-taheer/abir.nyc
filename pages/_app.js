import "../styles/globals.css";
import ThemeProvider from "../comps/theme/ThemeProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { GOOGLE_ANALYTICS_ID } from "../constants";

ReactGA.initialize(GOOGLE_ANALYTICS_ID);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.send("pageview");
  }, [router]);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
