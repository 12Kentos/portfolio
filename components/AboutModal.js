import Modal from "react-modal";
import styles from "./AboutModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ProjectModal(props) {
  return (
    <>
      <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(216, 212, 210, 1)",
          },
          content: {
            top: "10vh",
            left: "20vw",
            right: "20vw",
            bottom: "10vh",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "2rem",
            padding: "2rem",
          },
        }}
      >
        <button className={styles["close-btn"]} onClick={props.closeButton}>
          <AiOutlineCloseCircle />
        </button>
        <div className={styles["modal-wrapper"]}>
          <h2 className={styles.h2}>About me</h2>
          <p className={styles.p}>
            I'm a long time avid IT guy, currently work as an IT admin, but want
            to make the transition to a front end developer. Taking lots of
            online classes, and hope to make the transition sooner rather than
            later!
          </p>
          <h4 className={styles.h4}>Hobbies</h4>
          <p className={styles.p}>
            Currently learning HTML, CSS, Tailwind, SASS, JavaScript, React,
            Next, Firebase, and Git with hopefully more in the future.
          </p>
          <h3 className={styles.h3}>Skills</h3>
          <div className={styles["skills-wrapper"]}>
            {props.skills.map((skill) => (
              <>{skill}</>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
