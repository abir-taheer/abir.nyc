import Head from "next/head";
import Container from "@mui/material/Container";
import Footer from "../comps/ui/Footer";
import Backdrop from "../comps/ui/Backdrop";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abir Taheer</title>
        <meta
          name="description"
          content="My personal site with bio, projects, and photos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Backdrop />

      <Footer />
    </div>
  );
}
