import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { getBookings } from '../services/BookingService';

const BookingsContainer = () => {

    const [hotelBookings, setHotelBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setHotelBookings(allBookings)
        })
    }, []);

    const addBooking = (booking) => {
        const temp = hotelBookings.map(b => b);
        temp.push(booking);
        setHotelBookings(temp)
    }

    const removeBooking = (id) => {
        const temp = hotelBookings.map(b => b);
        const indexToDel = temp.map(b => b._id).indexOf(id);

        temp.splice(indexToDel, 1);
        setHotelBookings(temp);
    }

    return (
        <>
            <Form addBooking={addBooking}/>
            <List hotelBookings={hotelBookings} removeBooking={removeBooking}/>
        </>
    )
}

export default BookingsContainer;