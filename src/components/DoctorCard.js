import React from "react";

function DoctorCard({ doctor, onBook, darkMode }) {
  return (
    <div className={`card ${darkMode ? "card-dark" : ""}`}>

      <h2>{doctor.name}</h2>

      <p>
        <b>Specialization:</b> {doctor.specialization}
      </p>

      <p>
        <b>Consultation Fee:</b> ₹{doctor.fee}
      </p>

      <button onClick={onBook} className="book-btn">
        Book Appointment
      </button>

    </div>
  );
}

export default DoctorCard;