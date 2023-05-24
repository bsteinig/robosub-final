import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import Nav from "@/features/navbar/navbar";
import Footer from "@/features/footer";
import Loading from "@/features/loading";
import Markers from "@/features/googleMaps/markers";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    // setLoading(false);
  }, []);

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Head>
        <title>Michigan Robosub</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
            fontFamily: "Inter",
            headings: {
              fontFamily: "Poppins",
            },
          }}
        >
          {loading && <Loading />}
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
