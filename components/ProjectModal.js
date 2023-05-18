import Modal from "react-modal";
import Image from "next/image";
import styles from "./ProjectModal.module.scss";

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
        <div className={styles["modal-wrapper"]}>
          <Image src={props.image} className={styles.img} />
        </div>
      </Modal>
    </>
  );
}
