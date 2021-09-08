import React, {useState} from 'react';
import { postBooking } from '../services/BookingService';

const Form = ({addBooking}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <h2>Add a booking</h2>
                <div>
                    <label>Name:</label>
                    <input onChange={onChange} type="text" id="name" required/>
                </div>
                <br></br>
                <div>
                    <label>Email:</label>
                    <input onChange={onChange} type="text" id="email" required/>
                </div>
                <br></br>
                <div>
                    <label>Checked in?</label>
                    <input onChange={onChange} type="text" id="status"/>
                </div>
                <br></br>
                <input type="submit" value="Save" id="save"/>
            </form>
        </>
    )
}

export default Form;