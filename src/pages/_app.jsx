import { Jost } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import ScrollToTop from "@/components/scrollToTopBtn";
import Head from "next/head";

const OpenSans = Jost({
  subsets: ["latin"],
  variable: "--font-os",
});

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Head>
        <title>Altheory</title>
        <meta
          name="description"
          content="At Altheory, we are dedicated to empowering businesses with cutting-edge software solutions tailored to their unique needs. With a passion for innovation and a commitment to excellence, we have been a trusted partner for organizations of all sizes, helping them streamline their operations, boost efficiency, and achieve their business goals."
        />
        <meta
          name="keywords"
          content="altheory, onbaordme ,website, home, page"
        />
        <meta property="og:title" content="Altheory | Home Page" />
        <meta
          property="og:description"
          content="Altheory,empowering businesses with cutting-edge software solutions"
        />
        {/* <meta property="og:image" content="/path/to/your/og-image.jpg" /> */}
        <meta property="og:url" content="https://www.altheory.in/" />
        <meta property="og:type" content="website" />
      </Head>
      <main className={`${OpenSans.variable} font-sans`}>
        <ScrollToTop />
        {/* <MainLayout> */}
        <Component {...pageProps} />
        {/* </MainLayout> */}
      </main>
    </AnimatePresence>
  );
}
