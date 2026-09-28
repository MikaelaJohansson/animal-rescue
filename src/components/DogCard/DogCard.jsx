import { useState } from "react";
import styles from "./DogCard.module.css";
import animalImages from "../../Data/animalImages";
import StatusBadge from "../StatusBadge/StatusBadge";

export default function DogCard({ animals }) {

    const [startIndex, setStartIndex] = useState(0);

    const visibleAnimals = animals.slice(startIndex, startIndex + 4);


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
        <div className={styles.carousel}>

            <button onClick={handlePrevious}>
                ←
            </button>


            <div className={styles.cards}>

                {visibleAnimals.map((animal) => (

                    <div className={styles.card}key={animal.id} >

                        <img
                            src={animalImages[animal.image]}
                            alt={animal.name}
                        />

                        <h3>{animal.name}</h3>

                        <p>
                            {animal.age} years • {animal.gender}
                        </p>

                        <StatusBadge status={animal.status} />

                    </div>

                ))}

            </div>


            <button onClick={handleNext}>
                →
            </button>

        </div>
    );
}