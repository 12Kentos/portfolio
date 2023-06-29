import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";
import styles from "./Project.module.scss";

export default function Project(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [emailSent, setEmailSent] = useState();

  const toggleModal = () => {
    setEmailSent(false);
    setModalOpen(!modalOpen);
    if (props.about) {
      props.setFlag();
    }
  };

  const setEmailSentTrue = () => {
    setEmailSent(true);
  };

  // Below creates the hover effect depending on if the project is the about me or an actual project

  return (
    <>
      <>
        {props.about ? (
          <div className={`${props.className}`} onClick={toggleModal}>
            <button
              className={styles.invis}
              onClick={toggleModal}
              aria-label={props.ariaLabel}
            ></button>
            <p
              className={props.imgClasses}
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              About Me
            </p>
          </div>
        ) : (
          <div className={`${props.className}`} onClick={toggleModal}>
            <button
              className={styles.invis}
              onClick={toggleModal}
              aria-label={props.ariaLabel}
            ></button>
            <Image
              className={props.imgClasses}
              src={props.image}
              alt="Project Image"
            />
          </div>
        )}
      </>

      <ProjectModal
        setEmailSent={setEmailSentTrue}
        emailSent={emailSent}
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
