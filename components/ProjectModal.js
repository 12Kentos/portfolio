import Modal from "react-modal";
import Image from "next/image";

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
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
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
        <Image src={props.image} />
      </Modal>
    </>
  );
}
