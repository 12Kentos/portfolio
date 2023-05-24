import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";
import styles from "./Project.module.scss";

export default function Project(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    if (props.about) {
      props.setFlag();
    }
  };

  return (
    <>
      <>
        {props.about ? (
          <button className={`${props.className}`} onClick={toggleModal}>
            <p
              className={props.imgClasses}
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              About Me
            </p>
          </button>
        ) : (
          <div className={`${props.className}`} onClick={toggleModal}>
            <button className={styles.invis} onClick={toggleModal}></button>
            <Image className={props.imgClasses} src={props.image} />
          </div>
        )}
      </>

      <ProjectModal
        about={props.about}
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
