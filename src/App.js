import React, { useState } from "react";
import doctors from "./data";
import DoctorCard from "./components/DoctorCard";
import BookingForm from "./components/BookingForm";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="container">
      <h1>Online Doctor Appointment</h1>

      <div className="doctor-list">
        {doctors.map((doc) => (
          <DoctorCard
            key={doc.id}
            doctor={doc}
            onBook={() => setSelectedDoctor(doc)}
          />
        ))}
      </div>

      {selectedDoctor && (
        <BookingForm doctor={selectedDoctor} />
      )}
    </div>
  );
}

export default App;

