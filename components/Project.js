import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";

export default function Project(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button className={`${props.className}`} onClick={toggleModal}>
        <Image className={props.imgClasses} src={props.image} />
      </button>

      <ProjectModal
        modalOpen={modalOpen}
        image={props.image}
        closeModal={toggleModal}
        heading={props.heading}
        color={props.color}
        info={props.info}
        closeButton={toggleModal}
        skills={props.skills}
        urlLink={props.urlLink}
        gitHubLink={props.gitHubLink}
      />
    </>
  );
}
