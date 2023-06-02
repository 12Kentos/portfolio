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
            boxShadow: "0 1rem 3rem rgba(0,0,0,.5)",
          },
        }}
      >
        <button className={styles["close-btn"]} onClick={props.closeButton}>
          <AiOutlineCloseCircle />
        </button>
        {props.emailSent ? (
          <div className={styles["email-wrapper"]}>
            <p className={styles["email-text"]}>Thank you for the email!</p>
            <button
              className={styles["submit-btn"]}
              onClick={props.closeButton}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {props.about ? (
              <div
                className={`${styles["modal-wrapper"]} ${styles["modal-about"]}`}
              >
                <h2 className={styles["h2-about"]}>About me</h2>
                <p className={styles["p-about"]}>
                  I'm a professional frontend developer, with a passion to make
                  projects look great and run even better. I've been programming
                  for a little over a year, and I'm currenlty working on
                  polishing my frontend skills. I then plan to work on some of
                  my backend skills, to become a well rounded full stack
                  developer.
                </p>
                <h3 className={styles["h3-about"]}>Skills</h3>
                <div className={styles["skills-wrapper"]}>
                  {props.skills.map((skill) => (
                    <div
                      className={styles["skills-about"]}
                      style={{ color: props.color }}
                      key={skill.id}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <h3 className={styles["h3-about"]}>Contact Me</h3>
                <form
                  name="contact"
                  method="POST"
                  className={styles.form}
                  data-netlify="true"
                  action="/Success"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p>
                    <label htmlFor="yourname" className={styles.label}>
                      Your Name:
                    </label>{" "}
                    <input
                      type="text"
                      name="name"
                      id="yourname"
                      className={styles.input}
                      required
                    />
                  </p>
                  <p>
                    <label htmlFor="youremail" className={styles.label}>
                      Your Email:
                    </label>{" "}
                    <input
                      type="email"
                      name="email"
                      id="youremail"
                      className={styles.input}
                      required
                    />
                  </p>
                  <p>
                    <label htmlFor="yourmessage" className={styles.label}>
                      Message:
                    </label>{" "}
                    <textarea
                      name="message"
                      id="yourmessage"
                      className={`${styles.input} ${styles["text-area"]}`}
                      required
                    ></textarea>
                  </p>
                  <p>
                    <button type="submit" className={styles["submit-btn"]}>
                      Send
                    </button>
                  </p>
                </form>
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
          </>
        )}
      </Modal>
    </>
  );
}
