import { Jost } from "next/font/google";

import "@/styles/globals.css";
const OpenSans = Jost({
  subsets: ["latin"],
  variable: "--font-os",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${OpenSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
