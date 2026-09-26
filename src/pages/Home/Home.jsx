import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import React from 'react'
import styles from "./Home.module.css"
import animalImages from "../../Data/animalImages";
import homePage from "../../assets/homePage.jpg"

export default function Home() {

    // const [animals, setAnimals] = useState([]);
    // useEffect(() => {

    //     async function getAnimals() {

    //         const querySnapshot = await getDocs(collection(db, "animals"));

    //         const animalsData = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data(),
    //         }));

    //         setAnimals(animalsData);

    //     }

    //     getAnimals();
        
    // }, []);


  return (
    <div className={styles.mainContainerHome}>

        <header className={styles.containerHeaderHome}>

            <h1>A safer life  <br /> for more Dogs</h1>
            <p>
                We rescue, care for, and rehome dogs in need of a new home. <br /> 
                Together, we can make a difference
            </p>
           
            <button className={styles.containerHeaderHomeButtonMeetDog}>Meet our dogs</button>
            <button className={styles.containerHeaderHomeButtonApply}>Apply to adopt</button>

        </header>
      
       

     
        {/* 
        {animals.map((animal) => (

            <div key={animal.id}>

                <img
                src={animalImages[animal.image]}
                alt={animal.name}
                width="200"
                />

                <p>{animal.name}</p>

            </div>
        ))} */}

    </div>

  )
}
