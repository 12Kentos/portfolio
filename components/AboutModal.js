import Modal from "react-modal";
import styles from "./AboutModal.module.scss";

export default function ProjectModal(props) {
  return (
    <>
      <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.closeModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(216, 212, 210, 1)",
          },
          content: {
            position: "absolute",
            top: "100px",
            left: "200px",
            right: "200px",
            bottom: "100px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div>{props.info}</div>
        <div className={styles.testing}>{props.html}</div>
      </Modal>
    </>
  );
}
