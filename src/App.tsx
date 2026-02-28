import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import WindowCoverings from "./pages/WindowCoverings/WindowCoverings";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Promotions from "./pages/Promotions/Promotions";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/window-coverings" element={<WindowCoverings />} />
            <Route path="/team" element={<Team />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
