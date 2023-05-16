import Head from "next/head";
import styles from "./index.module.scss";
import Project from "@/components/Project";

import multiForm from "../images/Multi-Step-Form.jpg";
import shoes from "../images/Ecommerce-Product-Page.jpg";
import space from "../images/Space-Tourism-Website.jpg";
import forkify from "../images/Forkify.jpg";
import twitter from "../images/Twitter Clone.jpg";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [wrapperStyle, setWrapperStyle] = useState();
  const [flag, setFlag] = useState(false);
  const wrapperRef = useRef(null);
  const scrollToRef = useRef(null);
  const [secondFlag, setSecondFlag] = useState(false);

  useEffect(() => {
    scrollToRef.current.scrollIntoView({
      behavior: "instant",
      block: "center",
      inline: "center",
    });
  }, []);

  const handleSetFlag = () => {
    setFlag(true);
  };

  const mouseHandle = (e) => {
    if (flag) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth;
      const yDecimal = mouseY / window.innerHeight;

      const maxX = wrapperRef.current.offsetWidth - window.innerWidth;
      const maxY = wrapperRef.current.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1;
      const panY = maxY * yDecimal * -1;

      // setWrapperStyle({ transform: `translate(${panX}px, ${panY}px)` });
      // console.log(panX);
      // console.log(panY);

      if (secondFlag) {
        console.log("First Flag");
        setWrapperStyle({ transform: `translate(${panX}px, ${panY}px)` });
      } else {
        console.log("Second Flag");
        setSecondFlag(true);
        setWrapperStyle({ transform: `translate(${-55}%, ${-60}%)` });
      }
    }
  };

  return (
    <>
      <Head></Head>
      <main
        className={styles["body-wrapper"]}
        style={wrapperStyle}
        onMouseMove={mouseHandle}
        ref={wrapperRef}
      >
        <div
          className={styles["project-wrapper"]}
          ref={scrollToRef}
          onClick={handleSetFlag}
        >
          <p className={styles["info"]}>About me</p>
        </div>

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-four"]}`}
          imgClasses={styles["info"]}
          image={twitter}
          urlLink={"https://final-twitter-clone.vercel.app/"}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-two"]}`}
          imgClasses={styles["info"]}
          image={forkify}
          urlLink={"https://forkify-kent.netlify.app/"}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-three"]}`}
          imgClasses={styles["info"]}
          image={space}
          urlLink={"https://kent-space-tourism-multi-page-website.netlify.app/"}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-one"]}`}
          imgClasses={styles["info"]}
          image={shoes}
          urlLink={"https://12kentos-ecommerce-product-page-main.netlify.app/"}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-five"]}`}
          imgClasses={styles["info"]}
          image={multiForm}
          urlLink={"https://12kentos.github.io/Multi-step-form/"}
        />
      </main>
    </>
  );
}
