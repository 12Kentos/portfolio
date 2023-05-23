import Modal from "react-modal";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";

export default function ProjectModal(props) {
  console.log(`The skills ${props.skills}`);

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
            top: "5vh",
            left: "15vw",
            right: "15vw",
            bottom: "5vh",
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
              style={{ color: props.color, border: `2px solid ${props.color}` }}
              className={`${styles.link} ${styles["link-right"]}`}
            >
              View Repo
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
