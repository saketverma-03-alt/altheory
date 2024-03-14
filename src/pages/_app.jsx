import { Jost } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import ScrollToTop from "@/components/scrollToTopBtn";
const OpenSans = Jost({
  subsets: ["latin"],
  variable: "--font-os",
});

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <main className={`${OpenSans.variable} font-sans`}>
        <ScrollToTop />
        {/* <MainLayout> */}
        <Component {...pageProps} />
        {/* </MainLayout> */}
      </main>
    </AnimatePresence>
  );
}
