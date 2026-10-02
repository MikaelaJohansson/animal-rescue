import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Dogs from "./pages/Dogs/Dogs"
import About from "./pages/About/About"
import AdoptionProcess from "./pages/AdoptionProcess/AdoptionProcess"
import Contact from "./pages/Contact/Contact"


function App() {
  

  return (
    <main>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/adoption-process" element={<AdoptionProcess/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dogs" element={<Dogs/>}/>
        {/* <Route path="/dogs/:dogId" element={<DogDetails />} /> */}
      </Routes>

      <Footer/>
  
    </main>
  );
}

export default App;