
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot, FaLinkedin, FaGithub } from "react-icons/fa6";
import styles from "./Contact.module.css";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    // Sends the contact form directly to EmailJS
    async function handleSubmit(event) {

        event.preventDefault();

        setIsSending(true);
        setStatus("");

        const templateParams = {
            name: name,
            email: email,
            message: message,
            subject: "Animal Rescue portfolio - Message from " + name,
            from_name: name,
            reply_to: email
        };

        try {

            await emailjs.send(
                "service_0tm1ts1",
                "template_4j5uw7r",
                templateParams,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                }
            );

            setStatus("Your message has been sent successfully!");
            setName("");
            setEmail("");
            setMessage("");

        } catch (error) {

            console.error("EmailJS error:", error);
            setStatus("Something went wrong. Please try again.");

        } finally {

            setIsSending(false);

        }
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

                        <button type="submit" disabled={isSending}>
                            {isSending ? "Sending..." : "Send Message"}
                        </button>

                        {status && (
                            <p role="status">
                                {status}
                            </p>
                        )}

                    </form>

                </section>

            </div>

        </main>

    );
}
