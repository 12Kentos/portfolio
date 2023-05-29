import "@/styles/globals.css";
import styles from "./app.module.scss";

import { Delius } from "next/font/google";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${delius.className} ${styles["main-comp"]}`}>
      <Component {...pageProps} />
    </main>
  );
}
