import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  

  return (
    <main>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Footer/>
  
    </main>
  );
}

export default App;