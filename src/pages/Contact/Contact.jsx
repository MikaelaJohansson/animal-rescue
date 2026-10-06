import { useState } from "react";
import { FaLocationDot, FaLinkedin, FaGithub } from "react-icons/fa6";
import styles from "./Contact.module.css";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(event) {

        event.preventDefault();

        const subject = encodeURIComponent(
            "Animal Rescue portfolio - Message from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=mikaela.johansson87@gmail.com" +
            "&su=" + subject +
            "&body=" + body;

        window.open(gmailUrl, "_blank");

        setName("");
        setEmail("");
        setMessage("");
    }


    return (

        <main className={styles.mainContainerContact}>

            <div className={styles.contactContent}>

                {/* Contact information */}

                <section className={styles.contactInformation}>

                    <div>

                        <h1>Contact Me</h1>

                        <p className={styles.introText}>
                            Have a question about this DEMO-project?
                            Feel free to get in touch!
                        </p>

                    </div>

                    <div className={styles.contactDetails}>

                        <div>

                            <FaLocationDot />

                            <span>Stockholm, Sweden</span>

                        </div>

                    </div>


                    <div className={styles.socialContainer}>

                        <h2>Find me online</h2>

                        <div className={styles.socialLinks}>

                            <a
                                href="https://www.linkedin.com/in/mikaela-johansson-6a59b82a5"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>


                            <a
                                href="https://github.com/MikaelaJohansson"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                        </div>

                    </div>


                    <p className={styles.demoText}>
                        Animal Rescue is a portfolio demonstration project.
                    </p>

                </section>


                {/* Contact form */}

                <section className={styles.formContainer}>

                    <form onSubmit={handleSubmit}>

                        <label>

                            Your Name *

                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />

                        </label>


                        <label>

                            Your Email *

                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />

                        </label>


                        <label>

                            Your Message *

                            <textarea
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            />

                        </label>


                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </section>

            </div>

        </main>

    );
}