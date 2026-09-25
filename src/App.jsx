import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
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
    <main>
      <h1>Animal Rescue</h1>

      {animals.map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}
    </main>
  );
}

export default App;