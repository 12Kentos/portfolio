import Modal from "react-modal";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";

export default function ProjectModal(props) {
  // const mailTo = () => {
  //   window.open("mailto:test@example.com?subject=subject&body=body");
  // };

  return (
    <>
      <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(216, 212, 210, .7)",
          },
          content: {
            top: "5vh",
            left: "15vw",
            right: "15vw",
            bottom: "5vh",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "2rem",
            padding: "2rem",
            boxShadow: "0 1rem 3rem rgba(0,0,0,.5)",
          },
        }}
      >
        <button className={styles["close-btn"]} onClick={props.closeButton}>
          <AiOutlineCloseCircle />
        </button>
        {props.about ? (
          <div
            className={`${styles["modal-wrapper"]} ${styles["modal-about"]}`}
          >
            <h2 className={styles["h2-about"]}>About me</h2>
            <p className={styles["p-about"]}>
              I'm a professional frontend dev with a passion to make projects
              look good, and run well. I've been programming for a little over a
              year now, and I'm currenlty working on polishing my frontend
              skills, and then planning on working on some of my backend skills,
              to become a well rounded programmer.
            </p>
            <h4 className={styles["h4-about"]}>Hobbies</h4>
            <p className={styles["p-about"]}>
              Currently learning HTML, CSS, Tailwind, SASS, JavaScript, React,
              Next, Firebase, and Git with hopefully more in the future.
            </p>
            <h3 className={styles["h3-about"]}>Skills</h3>
            <div className={styles["skills-wrapper"]}>
              {props.skills.map((skill) => (
                <div
                  className={styles["skills-about"]}
                  style={{ color: props.color }}
                  key={skill.id}
                >
                  {skill}
                </div>
              ))}
            </div>
            {/* <button onClick={mailTo}>Mail</button> */}
          </div>
        ) : (
          <div className={styles["modal-wrapper"]}>
            <h2 className={styles.h2} style={{ color: props.color }}>
              {props.heading}
            </h2>
            <div className={styles["img-wrapper"]}>
              <Image src={props.image} className={styles.img} />
            </div>
            <p className={styles.p}>{props.info}</p>
            <h3 className={styles.h3}>Skills Used</h3>
            <div className={styles.skills} style={{ color: props.color }}>
              <Link
                href={props.urlLink}
                target="_blank"
                style={{
                  color: props.color,
                  border: `2px solid ${props.color}`,
                }}
                className={`${styles.link} ${styles["link-left"]}`}
              >
                Visit Site
              </Link>
              {props.skills}
              <Link
                href={props.gitHubLink}
                target="_blank"
                style={{
                  color: props.color,
                  border: `2px solid ${props.color}`,
                }}
                className={`${styles.link} ${styles["link-right"]}`}
              >
                View Repo
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
