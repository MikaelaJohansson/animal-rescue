import { FaDog, FaDatabase, FaUserShield, FaFileCircleCheck } from "react-icons/fa6";
import styles from "./ProjectFlow.module.css";

export default function ProjectFlow() {

    return (
        
        <section className={styles.projectFlow}>

            {/* Project workflow introduction */}
            <div className={styles.projectFlowHeading}>

                <p className={styles.projectFlowSmallHeading}>
                    HOW IT WORKS
                </p>

                <h2> Follow a dog through the whole system</h2>

                <p>
                    The idea behind the project was to build more than
                    separate pages. The same dog can be followed through
                    the organisation from being added by an administrator
                    to finding a new home.
                </p>

            </div>


            {/* Project workflow cards */}
            <div className={styles.projectFlowGrid}>

                <article className={styles.projectFlowCard}>

                    <FaUserShield />

                    <span>01</span>

                    <h3>Admin adds a dog</h3>

                    <p>
                        An administrator can create, edit and manage a dog
                        in the internal Admin Portal.
                    </p>

                </article>


                <article className={styles.projectFlowCard}>

                    <FaDatabase />

                    <span>02</span>

                    <h3>Shared data</h3>

                    <p>
                        The dog is stored in Firestore and automatically
                        becomes available in the public application.
                    </p>

                </article>


                <article className={styles.projectFlowCard}>

                    <FaDog />

                    <span>03</span>

                    <h3>Adoption application</h3>

                    <p>
                        A visitor can view the dog and submit an adoption
                        application directly from the public website.
                    </p>

                </article>


                <article className={styles.projectFlowCard}>

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
    );
}