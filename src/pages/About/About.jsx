import { Link } from "react-router-dom";
import styles from "./About.module.css";
import AboutHero from "./AboutHero/AboutHero";
import ProjectFlow from "./ProjectFlow/ProjectFlow";

export default function About() {

    return (
        <main className={styles.mainContainerAbout}>

            {/* Hero section */}
            <AboutHero />


            {/* Project workflow */}
            <ProjectFlow />


            {/* Technology section */}
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

                <h2>Explore the project</h2>

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