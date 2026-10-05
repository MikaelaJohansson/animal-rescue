import { useState } from "react";
import {
    FaEnvelope,
    FaLocationDot,
    FaLinkedin,
    FaGithub
} from "react-icons/fa6";
import styles from "./Contact.module.css";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }


    function handleSubmit(event) {

        event.preventDefault();

        const subject = encodeURIComponent(
            `Animal Rescue portfolio - Message from ${formData.name}`
        );

        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=mikaela.johansson87@gmail.com` +
            `&su=${subject}` +
            `&body=${body}`;

        window.open(gmailUrl, "_blank");

        setFormData({
            name: "",
            email: "",
            message: ""
        });

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
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </label>


                        <label>

                            Your Email *

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </label>


                        <label>

                            Your Message *

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
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