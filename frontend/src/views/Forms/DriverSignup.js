import React, { useState } from 'react';

export default function DriverSignup(props) {
    const [formData, setFormData] = useState({
        description: '',
        carColor: '',
        licensePlate: '',
        seatCapacity: '',
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here (e.g., send data to a server)
        console.log(formData);
    };
    
    return (
        <div>
            <h2>Driver Signup</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Car Description: </label>
                <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Car Color: </label>
                <input
                type="text"
                name="color"
                value={formData.description}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label>License Plate: </label>
                <input
                type="text"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Seat Capacity: </label>
                <input
                type="number"
                name="seatCapacity"
                value={formData.seatCapacity}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}