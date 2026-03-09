function DoctorCard({ doctor, onBook }) {
  return (
    <div className="card">
      <h2>{doctor.name}</h2>
      <p><b>Specialization:</b> {doctor.specialization}</p>
      <p><b>Fee:</b> ₹{doctor.fee}</p>
      <button onClick={onBook}>Book Appointment</button>
    </div>
  );
}

export default DoctorCard;
