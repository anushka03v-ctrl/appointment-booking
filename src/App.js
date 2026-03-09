import React, { useState } from "react";
import doctors from "./data";
import DoctorCard from "./components/DoctorCard";
import BookingForm from "./components/BookingForm";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Header/>
      <br></br>
      <div className="container">
        <div className="doctor-list">
          {doctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              darkMode={darkMode}
              onBook={() => setSelectedDoctor(doc)}
            />
          ))}
        </div>

        {selectedDoctor && (
          <BookingForm doctor={selectedDoctor} darkMode={darkMode} />
        )}
      </div>

    </div>
  );
}

export default App