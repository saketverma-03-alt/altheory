import { Jost } from "next/font/google";
import { AnimatePresence } from 'framer-motion'
import "@/styles/globals.css";
const OpenSans = Jost({
  subsets: ["latin"],
  variable: "--font-os",
});

export default function App({ Component, pageProps }) {
  return (
          <AnimatePresence >
    <main className={`${OpenSans.variable} font-sans`}>
      <Component {...pageProps} />
      
    </main>

          </AnimatePresence>
  );
}
