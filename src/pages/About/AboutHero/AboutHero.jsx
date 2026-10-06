import styles from "./AboutHero.module.css";

export default function AboutHero() {

    return (
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
    );
}