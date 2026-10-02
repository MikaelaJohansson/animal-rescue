import styles from "./DogCards.module.css";
import animalImages from "../../../Data/animalImages";
import { Link } from "react-router-dom";
import StatusBadge from "../../../components/StatusBadge/StatusBadge";


export default function DogCards({ animals }) {






    return (

        <div className={styles.MainContainerDogCards  }>

            {animals.map((animal) => {

                return (

                    <Link className={styles.DogCardsContainer} key={animal.id} to={`/dogs/${animal.id}`}>

                        <img className={styles.ContainerDogCardsImg} src={animalImages[animal.image]} alt={animal.name} loading="lazy" />

                        <div className={styles.DogCardsContent}>

                            <h2>{animal.name}</h2>

                            <p>
                                {animal.age} years • {animal.gender} • {animal.breed}
                            </p>

                        </div>

                        <div className={styles.DogCardsContentStatus}>
                            <StatusBadge  status={animal.status}></StatusBadge>
                        </div>

                        

                    </Link>

                );

            })}

        </div>
      
        
    );
}