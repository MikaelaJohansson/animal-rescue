import { Link } from "react-router-dom";
import {
    FaDog,
    FaFilePen,
    FaMagnifyingGlass,
    FaHeart,
    FaHouse
} from "react-icons/fa6";
import styles from "./AdoptionProcess.module.css";

export default function AdoptionProcess() {

    return (

        <main className={styles.mainContainerAdoptionProcess}>


            {/* Header */}

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

            <section className={styles.processSection}>

                <div className={styles.processLine}></div>


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


            {/* Information */}

            <section className={styles.informationSection}>

                <div className={styles.informationText}>

                    <p className={styles.smallHeading}>
                        BEFORE YOU APPLY
                    </p>

                    <h2>
                        A Home for Life
                    </h2>

                    <p>
                        Bringing a dog home is a long-term commitment.
                        Before applying, make sure you have considered the
                        time, costs and responsibility that come with caring
                        for a dog.
                    </p>

                </div>


                <div className={styles.informationCards}>

                    <div>
                        <h3>Time</h3>

                        <p>
                            Dogs need daily exercise, companionship,
                            training and care.
                        </p>
                    </div>


                    <div>
                        <h3>Responsibility</h3>

                        <p>
                            Your dog will depend on you for a safe and
                            stable home throughout its life.
                        </p>
                    </div>


                    <div>
                        <h3>The Right Match</h3>

                        <p>
                            Personality and lifestyle are just as important
                            as falling in love with a photo.
                        </p>
                    </div>

                </div>

            </section>


            {/* Call to action */}

            <section className={styles.adoptionCTA}>

                <FaHeart />

                <h2>
                    Ready to Meet Your New Best Friend?
                </h2>

                <p>
                    Take a look at the dogs currently waiting for a home.
                </p>

                <Link to="/dogs">
                    See Dogs for Adoption
                </Link>

            </section>


        </main>

    );
}