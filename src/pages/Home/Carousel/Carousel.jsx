import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";
import animalImages from "../../../Data/animalImages";
import StatusBadge from "../../../components/StatusBadge/StatusBadge";

export default function Carousel({ animals }) {

    const [startIndex, setStartIndex] = useState(0);

    const visibleAnimals = animals.slice(
        startIndex,
        startIndex + 4
    );


    function handleNext() {

        if (startIndex + 4 < animals.length) {
            setStartIndex(startIndex + 1);
        }

    }


    function handlePrevious() {

        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }

    }


    return (
        <div className={styles.mainContainerCarousel}>

            <button
                type="button"
                onClick={handlePrevious}
            >
                ←
            </button>


            <div className={styles.cards}>

                {visibleAnimals.map((animal) => (

                    <Link
                        to={`/dogs/${animal.id}`}
                        className={styles.card}
                        key={animal.id}
                    >

                        <img
                            src={animalImages[animal.image]}
                            alt={animal.name}
                            loading="lazy"
                        />

                        <h3>
                            {animal.name}
                        </h3>

                        <p>
                            {animal.age} years • {animal.gender}
                        </p>

                        <StatusBadge
                            status={animal.status}
                        />

                    </Link>

                ))}

            </div>


            <button
                type="button"
                onClick={handleNext}
            >
                →
            </button>

        </div>
    );
}