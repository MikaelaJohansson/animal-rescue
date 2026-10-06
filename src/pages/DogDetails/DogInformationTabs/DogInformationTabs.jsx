import { useState } from "react";
import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import styles from "./DogInformationTabs.module.css";

export default function DogInformationTabs({ animal }) {

    /* Stores which dog information tab is currently selected */
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className={styles.dogInformationTabs}>

            {/* Tab navigation */}
            <div className={styles.tabs}>

                <button
                    className={activeTab === "about" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("about")}
                >
                    About {animal.name}
                </button>

                <button
                    className={activeTab === "medical" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("medical")}
                >
                    Medical History
                </button>

                <button
                    className={activeTab === "personality" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("personality")}
                >
                    Personality
                </button>

            </div>


            {/* Tab content */}
            <div className={styles.tabContent}>

                {/* About dog */}
                {activeTab === "about" && (

                    <div className={styles.aboutContent}>

                        <div className={styles.aboutText}>

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


                        {/* Adoption card */}
                        <div className={styles.adoptionCard}>

                            <LuHeart className={styles.adoptionIcon} />

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
                                        className={styles.adoptionButton}
                                    >
                                        Apply to Adopt
                                    </Link>

                                </>

                            ) : (

                                <>

                                    <h2>
                                        {animal.name} is not currently available
                                    </h2>

                                    <p className={styles.notAvailable}>
                                        This dog is currently not available for adoption.
                                    </p>

                                </>

                            )}

                        </div>

                    </div>

                )}


                {/* Medical history */}
                {activeTab === "medical" && (

                    <div className={styles.simpleTabContent}>

                        <h2>
                            Medical History
                        </h2>

                        <div className={styles.medicalFacts}>

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


                {/* Personality */}
                {activeTab === "personality" && (

                    <div className={styles.simpleTabContent}>

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