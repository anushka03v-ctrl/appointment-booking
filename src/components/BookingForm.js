import { useState } from "react";

function BookingForm({ doctor }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Appointment Confirmed ✅
Doctor: ${doctor.name}
Patient: ${name}
Date: ${date}
Time: ${time}`
    );
  };

  return (
    <div className="form">
      <h2>Book Appointment with {doctor.name}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* TIME SLOT DROPDOWN */}
        <select
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select Time</option>
          {doctor.slots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
