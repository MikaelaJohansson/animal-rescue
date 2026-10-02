import styles from './Dogs.module.css'
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {Link} from "react-router-dom"
import DogCards from './DogCards/DogCards';
import DogFilter from "./DogFilters/DogFilters"

export default function Dogs() {


  const [animals, setAnimals] = useState([]);


  useEffect(() => {

    async function getAnimals() {

        const querySnapshot = await getDocs(collection(db, "animals"));

        const animalsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setAnimals(animalsData);

    }

    getAnimals();
      
  }, []);



  return (

    <div>

      <div>

        <h1>Our Dogs</h1>

        <p>
          Here you can see all the dogs looking for a new home. Filter and learn more about each dog.
        </p>

      </div>

      <DogFilter></DogFilter>

      <DogCards animals={animals}/>

    </div>
  );

}
