import Modal from "react-modal";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";

export default function ProjectModal(props) {
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
            "box-shadow": "0 1rem 3rem rgba(0,0,0,.5)",
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
              I'm a long time avid IT guy, currently work as an IT admin, but
              want to make the transition to a front end developer. Taking lots
              of online classes, and hope to make the transition sooner rather
              than later!
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
                >
                  {skill}
                </div>
              ))}
            </div>
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
