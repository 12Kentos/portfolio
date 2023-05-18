import Head from "next/head";
import styles from "./index.module.scss";
import Project from "@/components/Project";

import multiForm from "../images/Multi-Step-Form.jpg";
import shoes from "../images/Ecommerce-Product-Page.jpg";
import space from "../images/Space-Tourism-Website.jpg";
import forkify from "../images/Forkify.jpg";
import twitter from "../images/Twitter Clone.jpg";
import { useState, useRef, useEffect } from "react";
import AboutModal from "@/components/AboutModal";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export default function Home() {
  const [wrapperStyle, setWrapperStyle] = useState();
  const [flag, setFlag] = useState(false);
  const [secondFlag, setSecondFlag] = useState(false);
  const wrapperRef = useRef(null);
  const scrollToRef = useRef(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  useEffect(() => {
    scrollToRef.current.scrollIntoView({
      behavior: "instant",
      block: "center",
      inline: "center",
    });
  }, []);

  const handleSetFlag = () => {
    setAboutModalOpen(!aboutModalOpen);
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
        // console.log("First Flag");
        setWrapperStyle({ transform: `translate(${panX}px, ${panY}px)` });
      } else {
        // console.log("Second Flag");
        setSecondFlag(true);
        setWrapperStyle({ transform: `translate(${-55}%, ${-60}%)` });
      }
    }
  };

  // const openAboutModal = () => {
  //   setFlag(false);
  //   setAboutModalOpen(!aboutModalOpen);
  // };

  // const closeAboutModal = () => {
  //   setAboutModalOpen(!aboutModalOpen);
  //   setFlag(true);
  // };

  const toggleAboutModalOpen = () => {
    setAboutModalOpen(!aboutModalOpen);
    // if (flag) {
    //   setFlag(false);
    // } else {
    //   setFlag(true);
    // }
  };

  const skills = [
    <FaHtml5 className={styles.skills} />,
    <FaCss3Alt className={styles.skills} />,
    <FaSass className={styles.skills} />,
    <SiTailwindcss className={styles.skills} />,
    <DiJavascript1 className={styles.skills} />,
    <FaReact className={styles.skills} />,
    <TbBrandNextjs className={styles.skills} />,
    <SiFirebase className={styles.skills} />,
    <FaGithub className={styles.skills} />,
    <FaFigma className={styles.skills} />,
  ];

  return (
    <>
      <Head></Head>
      <div
        className={styles["body-wrapper"]}
        style={wrapperStyle}
        onMouseMove={mouseHandle}
        ref={wrapperRef}
      >
        <button
          className={styles["project-wrapper"]}
          ref={scrollToRef}
          onClick={handleSetFlag}
        >
          <p className={styles["info"]}>About me</p>
        </button>

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-four"]}`}
          imgClasses={styles["info"]}
          image={twitter}
          urlLink={"https://final-twitter-clone.vercel.app/"}
          heading={"Twitter Clone"}
          color={"rgba(120, 192, 221, 1)"}
          info={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
          }
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-two"]}`}
          imgClasses={styles["info"]}
          image={forkify}
          urlLink={"https://forkify-kent.netlify.app/"}
          heading={"Forkify"}
          color={"rgba(221, 157, 120, 1)"}
          info={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
          }
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-three"]}`}
          imgClasses={styles["info"]}
          image={space}
          urlLink={"https://kent-space-tourism-multi-page-website.netlify.app/"}
          heading={"Multi-page Space Tourism Site"}
          color={"rgba(1, 1, 20, 1)"}
          info={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
          }
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-one"]}`}
          imgClasses={styles["info"]}
          image={shoes}
          urlLink={"https://12kentos-ecommerce-product-page-main.netlify.app/"}
          heading={"Ecommerce Product Page"}
          color={"rgb(228, 132, 1)"}
          info={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
          }
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-five"]}`}
          imgClasses={styles["info"]}
          image={multiForm}
          urlLink={"https://12kentos.github.io/Multi-step-form/"}
          heading={"Multi-step Form"}
          color={"rgba(158, 193, 238, 1)"}
          info={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
          }
        />

        <AboutModal
          modalOpen={aboutModalOpen}
          closeModal={toggleAboutModalOpen}
          info="this is a test"
          skills={skills}
          closeButton={toggleAboutModalOpen}
        />
      </div>
    </>
  );
}

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaSass,
//   FaReact,
//   FaGithub,
//   FaFigma,
// } from "react-icons/fa";
// import { SiTailwindcss, SiFirebase } from "react-icons/si";
// import { DiJavascript1 } from "react-icons/di";
// import { TbBrandNextjs } from "react-icons/tb";
