import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import './App.css';
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import AgriculturalPumps from "./Components/AgriculturalPump";
import ResidentialPumps from "./Components/ResidentialPump";
import IndustrialPumps from "./Components/IndustrialPump/inde";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/agricultural-pumps" element={<AgriculturalPumps />} />
        <Route path="/industrial-pumps" element={<IndustrialPumps />} />
        <Route path="/residential-pumps" element={<ResidentialPumps />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
