import React, { useState } from 'react';

// page where dirvers can input their location and custom decription
const DriverPickUp = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    description: '',
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
    // Perform actions with the form data, such as sending it to a server or storing it in state/context
    console.log('Form Data:', formData);
    // Reset the form after submission (optional)
    setFormData({
      pickupLocation: '',
      description: '',
    });
  };

  return (
    <div className="driver-pickup">
      <h1>Pickup Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pickupLocation">Pickup Location:</label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// need to implement feature to display available cars

export default DriverPickUp;