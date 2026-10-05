import styles from "./About.module.css";
import { Link } from "react-router-dom";
import {
    FaDog,
    FaDatabase,
    FaUserShield,
    FaFileCircleCheck
} from "react-icons/fa6";

export default function About() {

    return (

        <main className={styles.mainContainerAbout}>


            {/* Hero */}

            <section className={styles.aboutHero}>

                <div className={styles.heroContent}>

                    <p className={styles.smallHeading}>
                        ABOUT THE PROJECT
                    </p>

                    <h1>
                        One Dog. Two Applications. One Complete Flow.
                    </h1>

                    <p className={styles.heroText}>
                        Animal Rescue is a demonstration project built to show
                        how a public website and an internal administration
                        system can work together.
                    </p>

                    <a
                        href="https://github.com/MikaelaJohansson"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.heroButton}
                    >
                        View project on GitHub
                    </a>

                </div>

            </section>


            {/* Project information */}

            <section className={styles.projectSection}>

                <div className={styles.sectionHeading}>

                    <p className={styles.smallHeading}>
                        HOW IT WORKS
                    </p>

                    <h2>
                        Follow a dog through the whole system
                    </h2>

                    <p>
                        The idea behind the project was to build more than
                        separate pages. The same dog can be followed through
                        the organisation from being added by an administrator
                        to finding a new home.
                    </p>

                </div>


                <div className={styles.flowGrid}>


                    <article className={styles.flowCard}>

                        <FaUserShield />

                        <span>01</span>

                        <h3>Admin adds a dog</h3>

                        <p>
                            An administrator can create, edit and manage a dog
                            in the internal Admin Portal.
                        </p>

                    </article>


                    <article className={styles.flowCard}>

                        <FaDatabase />

                        <span>02</span>

                        <h3>Shared data</h3>

                        <p>
                            The dog is stored in Firestore and automatically
                            becomes available in the public application.
                        </p>

                    </article>


                    <article className={styles.flowCard}>

                        <FaDog />

                        <span>03</span>

                        <h3>Adoption application</h3>

                        <p>
                            A visitor can view the dog and submit an adoption
                            application directly from the public website.
                        </p>

                    </article>


                    <article className={styles.flowCard}>

                        <FaFileCircleCheck />

                        <span>04</span>

                        <h3>Application workflow</h3>

                        <p>
                            The Admin Portal receives a notification. The
                            application can then be reviewed and approved,
                            updating the dog throughout the system.
                        </p>

                    </article>


                </div>

            </section>


            {/* Technology */}

            <section className={styles.technologySection}>

                <div className={styles.technologyContent}>

                    <div>

                        <p className={styles.smallHeading}>
                            BUILT WITH
                        </p>

                        <h2>
                            The technology behind the project
                        </h2>

                    </div>


                    <div className={styles.technologyList}>

                        <span>React</span>

                        <span>JavaScript</span>

                        <span>CSS Modules</span>

                        <span>Firebase</span>

                        <span>Firestore</span>

                        <span>Firebase Authentication</span>

                        <span>React Router</span>

                        <span>GitHub Actions</span>

                    </div>

                </div>

            </section>


            {/* Project links */}

            <section className={styles.projectLinks}>

                <h2>
                    Explore the project
                </h2>

                <p>
                    Start by exploring the dogs available on the public
                    website or continue to the Admin Portal to see how the
                    internal workflow is managed.
                </p>

                <div className={styles.buttons}>

                    <Link to="/dogs">
                        View Our Dogs
                    </Link>

                    <a
                        href="https://animal-rescue-admin.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Admin Portal
                    </a>

                </div>

            </section>


        </main>

    );
}