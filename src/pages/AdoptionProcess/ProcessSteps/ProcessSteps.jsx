import { FaDog, FaFilePen, FaMagnifyingGlass, FaHeart, FaHouse } from "react-icons/fa6";
import styles from "./ProcessSteps.module.css";

export default function ProcessSteps() {

    return (
        <section className={styles.processSection}>

            {/* Line behind the adoption steps */}
            <div className={styles.processLine}></div>


            {/* Step 1 - Find a dog */}
            <article className={styles.processStep}>

                <div className={styles.iconContainer}>
                    <FaDog />
                </div>

                <span className={styles.stepNumber}>
                    01
                </span>

                <h2>Find Your Dog</h2>

                <p>
                    Explore the dogs currently looking for a new home.
                    Read about their personality, background and needs
                    to find a dog that could be right for you.
                </p>

            </article>


            {/* Step 2 - Apply */}
            <article className={styles.processStep}>

                <div className={styles.iconContainer}>
                    <FaFilePen />
                </div>

                <span className={styles.stepNumber}>
                    02
                </span>

                <h2>Apply to Adopt</h2>

                <p>
                    Found someone special? Send an adoption application
                    and tell us about your home, experience and everyday
                    life.
                </p>

            </article>


            {/* Step 3 - Application review */}
            <article className={styles.processStep}>

                <div className={styles.iconContainer}>
                    <FaMagnifyingGlass />
                </div>

                <span className={styles.stepNumber}>
                    03
                </span>

                <h2>Application Review</h2>

                <p>
                    Our team reviews your application and considers
                    whether your home and lifestyle are a good match
                    for the dog.
                </p>

            </article>


            {/* Step 4 - Meet the dog */}
            <article className={styles.processStep}>

                <div className={styles.iconContainer}>
                    <FaHeart />
                </div>

                <span className={styles.stepNumber}>
                    04
                </span>

                <h2>Meet Your Match</h2>

                <p>
                    If the application looks like a good match, the next
                    step is getting to know the dog and making sure it
                    feels right for everyone.
                </p>

            </article>


            {/* Step 5 - Welcome home */}
            <article className={styles.processStep}>

                <div className={styles.iconContainer}>
                    <FaHouse />
                </div>

                <span className={styles.stepNumber}>
                    05
                </span>

                <h2>Welcome Home</h2>

                <p>
                    Once everything is approved, it is time for your new
                    family member to come home and start the next chapter.
                </p>

            </article>

        </section>
    );
}