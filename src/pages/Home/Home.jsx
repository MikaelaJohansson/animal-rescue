import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FaPaw, FaHeart, FaHouse, FaUserGroup } from "react-icons/fa6";
import styles from "./Home.module.css"
import animalImages from "../../Data/animalImages";
import Carousel from "../../components/Carousel/Carousel";
import SupportSection from "./SupportSection/SupportSection"
import PartnerOrganizations from "./PartnerOrganizations/PartnerOrganizations"

export default function Home() {

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
    <div className={styles.mainContainerHome}>

        <header className={styles.containerHeaderHome}>

            <div  className={styles.containerHeaderText}>
                <h1>A safer life  <br /> for more Dogs</h1>
                <p>
                    We rescue, care for, and rehome dogs in need of a new home. <br /> 
                    Together, we can make a difference
                </p>

            </div>
           
           <div className={styles.containerHeaderHomeButton}>
              <button className={styles.containerHeaderHomeButtonMeetDog}>Meet our dogs</button>
              <button className={styles.containerHeaderHomeButtonApply}>Apply to adopt</button>
           </div>
          

        </header>
      
       
        <section  className={styles.containerMidSection}>
            <div className={styles.containerContent}><FaPaw className={styles.icon}  /><strong>No-Kill Shelter</strong> Every life deserves a chance</div>
            <div className={styles.containerContent}><FaHeart className={styles.icon}  /><strong>They Choose You Too</strong>Finding the right match goes both ways</div>
            <div className={styles.containerContent}><FaHouse className={styles.icon}  /><strong>Always a Safe Return</strong>We’ll always welcome them back</div>
            <div className={styles.containerContent}><FaUserGroup className={styles.icon} /><strong>Together We Make a Difference</strong> Every helping hand changes a life</div>
        </section>

        <section className={styles.containerAllDogs}>

            <div>
                <h1>Some of Our Dogs 🐾</h1>
            </div>

            <Carousel animals={animals} />

        </section>

        <section>
            <SupportSection/>
        </section>

        <section>
            <PartnerOrganizations/>
        </section>
     
      

    </div>

  )
}
