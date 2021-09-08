import React from 'react';
import Booking from './Booking';

const List = ({hotelBookings, removeBooking}) => {

    const bookingsList = hotelBookings.map((booking) => {
        return <Booking booking={booking} key={booking._id} removeBooking={removeBooking}/>
    });

    return (
       <>
            {bookingsList}
        </>
    )
}

export default List;