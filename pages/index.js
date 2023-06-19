import Head from "next/head";
import styles from "./index.module.scss";
import Project from "@/components/Project";

// Image imports

import multiForm from "../images/Multi-Step-Form.jpg";
import shoes from "../images/Ecommerce-Product-Page.jpg";
import space from "../images/Space-Tourism-Website.jpg";
import forkify from "../images/Forkify.jpg";
import twitter from "../images/Twitter-Clone.jpg";
import reactMeals from "../images/React-Meals.jpg";

import { useState, useRef, useEffect } from "react";

// Icon imports

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

  // UseEffect centers the screen over the center element (The about block)

  useEffect(() => {
    scrollToRef.current.scrollIntoView({
      behavior: "instant",
      block: "center",
      inline: "center",
    });

    // Beleove getElementById selectes the __next div, which is the root div in a NextJS project, styles were needed to make the project work

    document.getElementById("__next").className = `${styles["root-div"]}`;
  }, []);

  // Below flag is triggered when the about block has been clicked and allows the sreen to "move"

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
      {/* <!-- A little help for the Netlify bots*/}
      <form name="contact" data-netlify="true" hidden className={styles.hidden}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <Head>
        <title>Kent OSullivan Portfolio</title>
        <meta name="portfolio" content="Kent O'Sullivan Portfolio" />
      </Head>
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
          ariaLabel={"About me"}
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
            "Twitter Clone is an app built to resemble Twitter. This project was built using NextJs, and the backend is utilizing Firebase. It has the ability to authenticate users and once authenticated, you can like and comment on posts and create your own tweets. You also have the ability to delete your own comments/tweets and upload images."
          }
          skills={[skills[3], skills[8], skills[9], skills[10]]}
          ariaLabel={"Project one"}
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
            "Forkify is the first big project I built using plain html/scss/javascript. It's an app that allows you to search for recipes gathered from around the web. Once you find a recipe you like, you can then add it to your bookmarks which are saved using local storage. You can also adjust the amount of servings you would like and the instructions will adjust accordingly. Additionaly you have the capability of adding in your own recipes."
          }
          skills={[skills[0], skills[2], skills[4]]}
          ariaLabel={"Project two"}
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
            "This multi-page project was built using React, Scss, and React-Router. It's a hypothetical site that allows users to book travel into space. There are several different pages detailing destinations, crew and technology that are available for their voyage."
          }
          skills={[skills[2], skills[5], skills[7]]}
          ariaLabel={"Project three"}
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
            "This project is a hypothetical product page for an ecommerce site. It was built using React and Scss. The user has the ability to view and select the color of shoe, and add the desired quantity to the cart. Checkout hasn't been implemented yet, but is planned for the future."
          }
          skills={[skills[2], skills[5]]}
          ariaLabel={"Project four"}
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
            "This was the last project I built using html/scss/javascript before moving on to work with React. It is a multi-step form with custom validation, allowing users to sign up for an online service with yearly or monthly payment options."
          }
          skills={[skills[0], skills[2], skills[4]]}
          ariaLabel={"Project five"}
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
            "ReactMeals is a hypothetical food ordering site for a fictitious food company. From a backend, users are offered different meal options and allowed to place an order. The order information is then sent to Firebase. This project was built using React, Scss, and Firebase."
          }
          skills={[skills[2], skills[5], skills[10]]}
          ariaLabel={"Project six"}
        />
      </div>
    </>
  );
}
