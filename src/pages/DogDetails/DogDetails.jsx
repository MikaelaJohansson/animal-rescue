import styles from "./DogDetails.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import animalImages from "../../Data/animalImages";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import {
    LuPawPrint,
    LuCalendarDays,
    LuDog,
    LuPalette,
    LuWeight,
    LuHeart
} from "react-icons/lu";


export default function DogDetails() {

    const { dogId } = useParams();

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("about");


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


        return () => {
            unsubscribe();
        };

    }, [dogId]);


    if (loading) {

        return (
            <div className={styles.MessageContainer}>
                <p>Loading dog...</p>
            </div>
        );

    }


    if (!animal) {

        return (
            <div className={styles.MessageContainer}>

                <h1>Dog not found</h1>

                <Link to="/dogs">
                    Back to Our Dogs
                </Link>

            </div>
        );

    }


    return (

        <div className={styles.MainContainerDogDetails}>


            <div className={styles.Breadcrumbs}>

                <Link to="/">
                    Home
                </Link>

                <span>/</span>

                <Link to="/dogs">
                    Our Dogs
                </Link>

                <span>/</span>

                <span>
                    {animal.name}
                </span>

            </div>


            <div className={styles.DogHeader}>


                <div className={styles.DogImageContainer}>

                    <img
                        className={styles.DogImage}
                        src={animalImages[animal.image]}
                        alt={animal.name}
                    />

                </div>


                <div className={styles.DogInformation}>


                    <div className={styles.NameContainer}>

                        <h1>
                            {animal.name}
                        </h1>

                        <StatusBadge
                            status={animal.status}
                        />

                    </div>


                    <div className={styles.DogFacts}>

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


                    {animal.status === "Available" ? (

                        <Link
                            to={`/dogs/${animal.id}/adopt`}
                            className={styles.AdoptionButton}
                        >
                            Apply to Adopt
                        </Link>

                    ) : (

                        <p className={styles.NotAvailable}>
                            This dog is currently not available for adoption.
                        </p>

                    )}

                </div>

            </div>


            <div className={styles.Tabs}>

                <button
                    className={
                        activeTab === "about"
                            ? styles.ActiveTab
                            : ""
                    }
                    onClick={() => setActiveTab("about")}
                >
                    About {animal.name}
                </button>


                <button
                    className={
                        activeTab === "medical"
                            ? styles.ActiveTab
                            : ""
                    }
                    onClick={() => setActiveTab("medical")}
                >
                    Medical History
                </button>


                <button
                    className={
                        activeTab === "personality"
                            ? styles.ActiveTab
                            : ""
                    }
                    onClick={() => setActiveTab("personality")}
                >
                    Personality
                </button>

            </div>


            <div className={styles.TabContent}>


                {activeTab === "about" && (

                    <div className={styles.AboutContent}>


                        <div className={styles.AboutText}>

                            <h2>
                                About {animal.name}
                            </h2>

                            <p>
                                {animal.description}
                            </p>


                            <h3>
                                Background
                            </h3>

                            <p>
                                {animal.history}
                            </p>

                        </div>


                        <div className={styles.AdoptionCard}>

                            <LuHeart
                                className={styles.AdoptionIcon}
                            />

                            {animal.status === "Available" ? (
                                <>

                                    <h2>
                                        Would you like to adopt {animal.name}?
                                    </h2>

                                    <p>
                                        Complete an application and tell us more
                                        about you and your home.
                                    </p>

                                    <Link
                                        to={`/dogs/${animal.id}/adopt`}
                                        className={styles.AdoptionButton}
                                    >
                                        Apply to Adopt
                                    </Link>

                                </>
                            ) : (
                                <>

                                    <h2>
                                        {animal.name} is not currently available
                                    </h2>

                                    <p className={styles.NotAvailable}>
                                        This dog is currently not available for adoption.
                                    </p>

                                </>
                            )}

                        </div>

                    </div>

                )}


                {activeTab === "medical" && (

                    <div className={styles.SimpleTabContent}>

                        <h2>
                            Medical History
                        </h2>


                        <div className={styles.MedicalFacts}>

                            <div>

                                <span>
                                    Vaccinated
                                </span>

                                <strong>
                                    {animal.vaccinated ? "Yes" : "No"}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Neutered
                                </span>

                                <strong>
                                    {animal.neutered ? "Yes" : "No"}
                                </strong>

                            </div>

                        </div>


                        <h3>
                            Medical Notes
                        </h3>

                        <p>
                            {animal.medicalNotes}
                        </p>

                    </div>

                )}


                {activeTab === "personality" && (

                    <div className={styles.SimpleTabContent}>

                        <h2>
                            Personality
                        </h2>

                        <p>
                            {animal.notes}
                        </p>

                    </div>

                )}

            </div>

        </div>

    );

}