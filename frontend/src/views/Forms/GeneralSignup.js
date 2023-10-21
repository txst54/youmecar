import React, { useState } from 'react';

// user(rider, driver, or org) is taken here before specialized forms
export default function GeneralSignup(props) {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
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
    };

    return (
      <div className="user-form">
        <h1>General Signup</h1>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}