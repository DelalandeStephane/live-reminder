import React, { useState } from 'react';
import '../styles/LiveForm.css';
function LiveForm ({handleSubmit}) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [newLive, setNewLive] = useState({
        id:getRandomInt(999999999),
        name :'',
        date:'',
        place:'',
        street:'',
        city:''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewLive(values => ({...values, [name]: value}))
      }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(newLive);
            setNewLive({});
        }}>
            <label htmlFor="name" >Band name</label>
            <input 
                type="text" 
                id='name' 
                required
                name='name' 
                value={newLive.name}
                onChange={handleChange}
                />
            <label htmlFor="date">Live date</label>
            <input 
                type="date" 
                id='date'
                name='date' 
                required 
                value={newLive.date}
                onChange={handleChange}
            />
            <label htmlFor="place">Where</label>
            <input 
                type="text" 
                id='place' 
                required
                name='place' 
                value={newLive.place}
                onChange={handleChange}
            />
            <label htmlFor="street">Street</label>
            <input 
                type="text" 
                id='street'
                name='street' 
                required 
                value={newLive.street}
                onChange={handleChange}
            />
            <label htmlFor="city">City</label>
            <input 
                type="text" 
                id='city' 
                required
                name='city' 
                value={newLive.city}
                onChange={handleChange}
            />
            <button className="button-17" type="submit">Add a live show</button>
        </form>
    )
}

export default LiveForm;