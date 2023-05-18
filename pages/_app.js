import "@/styles/globals.css";

import { Delius } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={delius.className}>
      <Component {...pageProps} />
    </main>
  );
}
