import styles from "./BeforeYouApply.module.css";

export default function BeforeYouApply() {

    return (
        <section className={styles.informationSection}>

            {/* Information introduction */}
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


            {/* Important information cards */}
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
    );
}