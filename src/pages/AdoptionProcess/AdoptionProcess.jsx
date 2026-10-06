import styles from "./AdoptionProcess.module.css";
import ProcessSteps from "./ProcessSteps/ProcessSteps";
import BeforeYouApply from "./BeforeYouApply/BeforeYouApply";
import AdoptionCTA from "./AdoptionCTA/AdoptionCTA";

export default function AdoptionProcess() {

    return (
        <main className={styles.mainContainerAdoptionProcess}>

            {/* Adoption process header */}
            <section className={styles.headerSection}>

                <p className={styles.smallHeading}>
                    ADOPTION PROCESS
                </p>

                <h1>
                    Finding the Right Home Takes Time
                </h1>

                <p className={styles.headerText}>
                    Adoption is more than choosing a dog.
                    Our goal is to find the right match for both you
                    and the dog.
                </p>

            </section>


            {/* Adoption steps */}
            <ProcessSteps />


            {/* Information before applying */}
            <BeforeYouApply />


            {/* Adoption call to action */}
            <AdoptionCTA />

        </main>
    );
}