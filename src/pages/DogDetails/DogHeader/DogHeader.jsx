import { Link } from "react-router-dom";
import { LuPawPrint, LuCalendarDays, LuDog, LuPalette, LuWeight } from "react-icons/lu";
import animalImages from "../../../Data/animalImages";
import StatusBadge from "../../../components/StatusBadge/StatusBadge";
import styles from "./DogHeader.module.css";

export default function DogHeader({ animal }) {

    return (
        <div className={styles.dogHeader}>

            {/* Dog image */}
            <div className={styles.dogImageContainer}>

                <img
                    className={styles.dogImage}
                    src={animalImages[animal.image]}
                    alt={animal.name}
                />

            </div>


            {/* Dog information */}
            <div className={styles.dogInformation}>

                <div className={styles.nameContainer}>

                    <h1>{animal.name}</h1>

                    <StatusBadge status={animal.status} />

                </div>


                {/* Dog facts */}
                <div className={styles.dogFacts}>

                    <div>
                        <LuPawPrint />
                        <span>{animal.gender}</span>
                    </div>

                    <div>
                        <LuCalendarDays />
                        <span>{animal.age} years</span>
                    </div>

                    <div>
                        <LuDog />
                        <span>{animal.breed}</span>
                    </div>

                    <div>
                        <LuPalette />
                        <span>{animal.color}</span>
                    </div>

                    <div>
                        <LuWeight />
                        <span>{animal.weight} kg</span>
                    </div>

                </div>


                {/* Adoption availability */}
                {animal.status === "Available" ? (

                    <Link
                        to={`/dogs/${animal.id}/adopt`}
                        className={styles.adoptionButton}
                    >
                        Apply to Adopt
                    </Link>

                ) : (

                    <p className={styles.notAvailable}>
                        This dog is currently not available for adoption.
                    </p>

                )}

            </div>

        </div>
    );
}