import AppointmentForm from '../components/AppointmentForm.jsx'
import './Appointment.css'

function Appointment() {
  return (
    <main className="appointment-page">

      {/* APPOINTMENT INFORMATION */}
      <section className="appointment-info">
        <h1>Appointment Information</h1>

        <p>
          Welcome to Aurelia Dental. Use this page to
          submit a sample appointment request and
          review your preferred appointment details.
        </p>

      </section>

      <AppointmentForm />

    </main>
  )
}

export default Appointment
