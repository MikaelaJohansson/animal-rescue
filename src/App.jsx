import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Dogs from "./pages/Dogs/Dogs";
import DogDetails from "./pages/DogDetails/DogDetails";
import AdoptionApplication from "./pages/AdoptionApplication/AdoptionApplication";
import About from "./pages/About/About";
import AdoptionProcess from "./pages/AdoptionProcess/AdoptionProcess";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {

    return (
        <div className="app">

            {/* Global navigation */}
            <Navbar />

            {/* Page content */}
            <main className="mainContent">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/adoption-process" element={<AdoptionProcess />} />

                    <Route path="/contact" element={<Contact />}  />

                    <Route path="/dogs"  element={<Dogs />} />

                    <Route path="/dogs/:dogId"  element={<DogDetails />}  />

                    <Route  path="/dogs/:dogId/adopt"  element={<AdoptionApplication />}/>

                </Routes>

            </main>

            {/* Global footer */}
            <Footer />

        </div>
    );
}

export default App;