import React from 'react';
import { deleteBooking } from '../services/BookingService';

const Booking = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    return (
        <>
            <div>
                <h4>Name: {booking.name}</h4>
                <p>Email: {booking.email}</p>
                <p>Checked in? {booking.status}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default Booking;