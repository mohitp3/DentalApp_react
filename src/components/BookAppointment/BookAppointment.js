import React from 'react'
import AppointmentForm from './AppointmentForm'
import DoctorInfo from './DoctorInfo'

const BookAppointment = () => {
    return (
        <section id="about">
            <div className="container pt-0">
                <div className="section-content">
                    <div className="row">
                        <DoctorInfo />
                        <AppointmentForm/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BookAppointment
