import { useState } from "react";

function BookingForm({ doctor }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your appointment is booked.");
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
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="date"
          min={today}
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
