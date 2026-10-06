import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import styles from "./Dogs.module.css";
import DogCards from "./DogCards/DogCards";
import DogFilters from "./DogFilters/DogFilters";

export default function Dogs() {

    const [animals, setAnimals] = useState([]);
    const [search, setSearch] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");


    useEffect(() => {

        const animalsCollection = collection(db, "animals");

        const unsubscribe = onSnapshot( animalsCollection,

            (querySnapshot) => {

                const animalsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setAnimals(animalsData);
            },

            (error) => {
                console.error("Error loading dogs:", error);
            }
        );


        return () => {  unsubscribe(); };

    }, []);


    const filteredAnimals = animals.filter((animal) => {

        /* Search by name or breed */
        const searchValue = search.toLowerCase();

        const matchesSearch =
            animal.name.toLowerCase().includes(searchValue) ||
            animal.breed.toLowerCase().includes(searchValue);


        /* Filter by age */
        const matchesAge = age === "young" 
        ? animal.age < 2 : age === "adult" 
        ? animal.age >= 2 && animal.age <= 5: age === "older"
        ? animal.age >= 6 : true;


        /* Filter by gender */
        const matchesGender = gender === "" ? true : animal.gender === gender;


        /* Filter by status */
        const matchesStatus = status === "" ? true : status === "On Hold" ? animal.status === "Medical Hold" : animal.status === status;


        return (
            matchesSearch &&
            matchesAge &&
            matchesGender &&
            matchesStatus
        );
    });


    return (
        <div className={styles.MainContainerDogs}>

            <div className={styles.DogsHeader}>

                <h1>Our Dogs</h1>

                <p>
                    Here you can see all the dogs looking for a new home.
                    Filter and learn more about each dog.
                </p>

            </div>


            <DogFilters
                search={search}
                setSearch={setSearch}
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={setGender}
                status={status}
                setStatus={setStatus}
            />


            <DogCards animals={filteredAnimals} />

        </div>
    );
}