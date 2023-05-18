import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";

export default function Project(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  let testingInfo = "Nothing";

  if (props.info) {
    testingInfo = props.info;
  }

  return (
    <>
      <button className={`${props.className}`} onClick={toggleModal}>
        <Image className={props.imgClasses} src={props.image} />
      </button>

      <ProjectModal
        modalOpen={modalOpen}
        image={props.image}
        closeModal={toggleModal}
        info={testingInfo}
      />
    </>
  );
}
