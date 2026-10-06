import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./DogDetails.module.css";
import DogHeader from "./DogHeader/DogHeader";
import DogInformationTabs from "./DogInformationTabs/DogInformationTabs";

export default function DogDetails() {

    /* Gets the selected dog id from the URL */
    const { dogId } = useParams();

    /* Stores the selected dog and loading state */
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);


    /* Gets the selected dog from Firestore and listens for changes */
    useEffect(() => {

        const docRef = doc(db, "animals", dogId);

        const unsubscribe = onSnapshot(
            docRef,

            (docSnapshot) => {

                if (docSnapshot.exists()) {

                    setAnimal({
                        id: docSnapshot.id,
                        ...docSnapshot.data()
                    });

                } else {

                    setAnimal(null);

                }

                setLoading(false);
            },

            (error) => {

                console.error("Error loading dog:", error);
                setLoading(false);

            }
        );


        return () => { unsubscribe(); };

    }, [dogId]);


    /* Shows a loading message while the dog is being loaded */
    if (loading) {

        return (
            <div className={styles.messageContainer}>
                <p>Loading dog...</p>
            </div>
        );

    }


    /* Shows a message if the selected dog does not exist */
    if (!animal) {

        return (
            <div className={styles.messageContainer}>

                <h1>Dog not found</h1>

                <Link to="/dogs"> Back to Our Dogs </Link>

            </div>
        );

    }


    return (
        <div className={styles.mainContainerDogDetails}>

            {/* Breadcrumb navigation */}
            <div className={styles.breadcrumbs}>

                <Link to="/">Home </Link>

                <span>/</span>

                <Link to="/dogs"> Our Dogs </Link>

                <span>/</span>

                <span> {animal.name} </span>

            </div>


            {/* Main dog information */}
            <DogHeader animal={animal} />


            {/* Dog tabs and information */}
            <DogInformationTabs animal={animal} />

        </div>
    );
}