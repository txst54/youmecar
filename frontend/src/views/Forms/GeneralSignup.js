import React, { useState } from 'react';

// user(rider, driver, or org) is taken here before specialized forms
export default function GeneralSignup(props) {
    const [formData, setFormData] = useState(props.role == "Rider" ? 
    {
      name: '',
      phone: '',
    }
    :
    props.role == "Driver" ? 
    {
      name: '',
      phone: '',
      description: '',
      carColor: '',
      licensePlate: '',
      seatCapacity: '',
    }
    :
    {
      name: '',
      phone: '',
      organizationName: '',
      description: '',
    }
    );

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
    };

    const renderAdvancedForm = () => {
      if (props.role == "Driver") {
        return (
          <div>
              <h2>Vehicle Details</h2>
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
                  /> <div className="w-[811px] h-[514px] bg-slate-100 rounded-[20px] shadow" />
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
          </div>
        );
      }
      if (props.role == "Org") {
        return (
          <div className="user-form">
          <h1>Organization Signup</h1>
            <div className="form-group">
              <label htmlFor="organizationName">Organization Name: </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description: </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        );
      }
    }

    return (
      <div className="user-form">
        <h1>Please enter your personal information: </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          {renderAdvancedForm()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}