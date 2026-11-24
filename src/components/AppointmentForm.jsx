
import { useState } from 'react'
import './AppointmentForm.css'

function AppointmentForm() {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')

const [appointmentType, setAppointmentType] = useState('')
const [preferredDate, setPreferredDate] = useState('')
const [preferredTime, setPreferredTime] = useState('')

// Preview State
const [showPreview, setShowPreview] = useState(false)

// Preview Event Handler
const handlePreview = (event) => {
  event.preventDefault()
  setShowPreview(true)
}

  return (
    <section className="appointment-form-section">

      <form
        className="appointment-form"
        onSubmit={handlePreview}
      >

        {/* PATIENT INFORMATION */}
        <fieldset className="patient-information">

          <legend>Patient Information</legend>

          {/* FIRST NAME */}
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
          </div>

            {/* LAST NAME */}
            <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            </div>

            {/* EMAIL ADDRESS */}
            <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            </div>

            {/* PHONE NUMBER */}
            <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />
            </div>

        </fieldset>


        {/* APPOINTMENT PREFERENCES */}
        <fieldset className="appointment-preferences">

        <legend>Appointment Preferences</legend>

        {/* APPOINTMENT TYPE */}
        <div className="form-field">
            <label htmlFor="appointmentType">
            Appointment Type
            </label>

            <select
            id="appointmentType"
            name="appointmentType"
            value={appointmentType}
            onChange={(event) => setAppointmentType(event.target.value)}
            >
            <option value="" disabled>
                Select an Appointment Type
            </option>

            <option value="preventive">
                Preventive Dentistry
            </option>

            <option value="cosmetic">
                Cosmetic Dentistry
            </option>

            <option value="restorative">
                Restorative Dentistry
            </option>

            <option value="consultation">
                Initial Consultation
            </option>
            </select>
        </div>

        {/* PREFERRED DATE */}
        <div className="form-field">
            <label htmlFor="preferredDate">
            Preferred Date
            </label>

            <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={preferredDate}
            onChange={(event) => setPreferredDate(event.target.value)}
            />
        </div>

        {/* PREFERRED TIME */}
        <div className="form-field">
            <label htmlFor="preferredTime">
            Preferred Time
            </label>

            <select
            id="preferredTime"
            name="preferredTime"
            value={preferredTime}
            onChange={(event) => setPreferredTime(event.target.value)}
            >
            <option value="" disabled>
                Select a Preferred Time
            </option>

            <option value="morning">
                Morning
            </option>

            <option value="afternoon">
                Afternoon
            </option>

            <option value="evening">
                Evening
            </option>
            </select>
        </div>

        </fieldset>

                {/* FORM ACTION */}
        <div className="appointment-form-actions">

            <button
                type="submit"
                className="preview-request-button"
            >
                Preview Patient Request
            </button>

        </div>

      </form>

      {showPreview && (
        <div className="appointment-preview">
            <h2>Appointment Request Preview</h2>

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email Address: {email}</p>
            <p>Phone Number: {phone}</p>

            <p>
                Appointment Type: {
                    {
                    preventive: 'Preventive Dentistry',
                    cosmetic: 'Cosmetic Dentistry',
                    restorative: 'Restorative Dentistry',
                    consultation: 'Initial Consultation'
                    }[appointmentType]
                }
            </p>

            <p>Preferred Date: {preferredDate}</p>
            <p>
            Preferred Time: {
                {
                morning: 'Morning',
                afternoon: 'Afternoon',
                evening: 'Evening'
                }[preferredTime]
            }
            </p>

            {/* PREVIEW ACTIONS */}
            <div className="preview-actions">

            <button
                type="button"
                className="edit-request-button"
                onClick={() => setShowPreview(false)}
            >
                Edit Request
            </button>

            </div>

        </div>
     )}

    </section>
  )

 

}

export default AppointmentForm
