import Head from "next/head";
import styles from "./index.module.scss";
import Project from "@/components/Project";

import multiForm from "../images/Multi-Step-Form.jpg";
import shoes from "../images/Ecommerce-Product-Page.jpg";
import space from "../images/Space-Tourism-Website.jpg";
import forkify from "../images/Forkify.jpg";
import twitter from "../images/Twitter Clone.jpg";
import reactMeals from "../images/React-Meals.jpg";
import { useState, useRef, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export default function Home() {
  const [wrapperStyle, setWrapperStyle] = useState();
  const [flag, setFlag] = useState(false);
  const [secondFlag, setSecondFlag] = useState(false);
  const wrapperRef = useRef(null);
  const scrollToRef = useRef(null);

  useEffect(() => {
    scrollToRef.current.scrollIntoView({
      behavior: "instant",
      block: "center",
      inline: "center",
    });
    document.getElementById("__next").className = `${styles["root-div"]}`;
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

      if (secondFlag) {
        setWrapperStyle({ transform: `translate(${panX}px, ${panY}px)` });
      } else {
        setSecondFlag(true);
        setWrapperStyle({ transform: `translate(${-55}%, ${-60}%)` });
      }
    }
  };

  const skills = [
    <FaHtml5 id={1} />,
    <FaCss3Alt id={2} />,
    <FaSass id={3} />,
    <SiTailwindcss id={4} />,
    <DiJavascript1 id={5} />,
    <FaReact id={6} />,
    <SiRedux id={7} />,
    <SiReactrouter id={8} />,
    <TbBrandNextjs id={9} />,
    <SiFramer id={10} />,
    <SiFirebase id={11} />,
    <FaGithub id={12} />,
    <FaFigma id={13} />,
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
        <div className={styles.invis} ref={scrollToRef}></div>

        <Project
          about={true}
          className={`${styles["project-wrapper"]} ${styles["project-about"]} ${
            flag && styles["after-click"]
          }`}
          setFlag={handleSetFlag}
          imgClasses={styles["info"]}
          skills={skills}
          color={"rgb(83, 184, 117)"}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-four"]}`}
          imgClasses={styles["info"]}
          image={twitter}
          urlLink={"https://final-twitter-clone.vercel.app/"}
          gitHubLink={"https://github.com/12Kentos/Final-Twitter-Clone"}
          heading={"Twitter Clone"}
          color={"rgba(120, 192, 221, 1)"}
          info={
            "Twitter Clone is an app built to resemble twitter. It has the ability to authenticate users, and once you have been authenticated you can post tweets, like, and comment on other peoples tweets. You have the ability to delete your own comments/tweets and upload images. This project was built using NextJs, and the backend is utilizing Firebase."
          }
          skills={[skills[3], skills[8], skills[9], skills[10]]}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-two"]}`}
          imgClasses={styles["info"]}
          image={forkify}
          urlLink={"https://forkify-kent.netlify.app/"}
          gitHubLink={"https://github.com/12Kentos/forkify-kent"}
          heading={"Forkify"}
          color={"rgba(246, 151, 131, 1)"}
          info={
            "Forkify is the first big project I built using plain html/scss/javascript. It's an app that allows you to search for recipes gathered from around the web. Once you find a recipe you like, you can then add it to your bookmarks which are saved using local storage. You can also adjust the amount of servings you would like, and the instructions will adjust accordingly. You also have the capability of adding in your own recipes."
          }
          skills={[skills[0], skills[2], skills[4]]}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-three"]}`}
          imgClasses={styles["info"]}
          image={space}
          urlLink={"https://kent-space-tourism-multi-page-website.netlify.app/"}
          gitHubLink={
            "https://github.com/12Kentos/Space-tourism-multi-page-website/tree/main"
          }
          heading={"Multi-page Space Tourism Site"}
          color={"rgba(44, 73, 107)"}
          info={
            "This project was built using React, Scss, and React-Router. It's an imaginary site that allows users to imagine they are preparing to go into space. There are several different pages depicting what destination, crew and technology they would like to use on their voyage."
          }
          skills={[skills[2], skills[5], skills[7]]}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-one"]}`}
          imgClasses={styles["info"]}
          image={shoes}
          urlLink={"https://12kentos-ecommerce-product-page-main.netlify.app/"}
          gitHubLink={"https://github.com/12Kentos/ecommerce-product-page-main"}
          heading={"Ecommerce Product Page"}
          color={"rgb(228, 132, 1)"}
          info={
            "This project is a hypothetical product page for an ecommerce site. It was built using React and Scss. The user has the ability to change the color of shoe, and add however many they want to the cart. Checkout hasn't been implemented yet, but is planned for the future."
          }
          skills={[skills[2], skills[5]]}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-five"]}`}
          imgClasses={styles["info"]}
          image={multiForm}
          urlLink={"https://12kentos.github.io/Multi-step-form/"}
          gitHubLink={"https://github.com/12Kentos/Multi-step-form"}
          heading={"Multi-step Form"}
          color={"rgba(158, 193, 238, 1)"}
          info={
            "This project is a multi-step form that has form validation to make sure everything that needs to be entered is there. It currently is not hooked up to a backend. It was the last project I built using html/scss/javascript."
          }
          skills={[skills[0], skills[2], skills[4]]}
        />

        <Project
          className={`${styles["project-wrapper"]} ${styles["project-six"]}`}
          imgClasses={styles["info"]}
          image={reactMeals}
          urlLink={"https://12kentos-react-meals.netlify.app/"}
          gitHubLink={"https://github.com/12Kentos/React-Meals"}
          heading={"ReactMeals"}
          color={"rgba(138, 43, 6, 1)"}
          info={
            "ReactMeals is a hypothetical food ordering site for a fictitious food company. Users are offered different meals from a backend, they are then allowed to place the order and the information is then sent to firebase. It was built using React, Scss, and Firebase for the database. Firebase's realtime database was used for this project."
          }
          skills={[skills[2], skills[5], skills[10]]}
        />
      </div>
    </>
  );
}
