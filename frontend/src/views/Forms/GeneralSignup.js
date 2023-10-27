import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';

export default function GeneralSignup(props) {
    const [formData, setFormData] = useState(
        props.role === "Rider"
            ? {
                  name: '',
                  phone: '',
              }
            : props.role === "Driver"
            ? {
                  name: '',
                  phone: '',
                  description: '',
                  carColor: '',
                  licensePlate: '',
                  seatCapacity: '',
              }
            : {
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

    const handlePrevious = () => {
        props.setRole(undefined);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = formData;
        body.role = props.role;

        getAuth()
            .currentUser.getIdToken()
            .then((idToken) => {
                fetch("http://localhost:5000/create-user", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "idtoken": idToken,
                    },
                }).then((response) => {
                  if (response.ok) {
                    window.location.reload();
                  }
                })
                .catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderAdvancedForm = () => {
        if (props.role === "Driver") {
            return (
                <div className="bg-slate-100 rounded-lg">
                    <h2 className="mb-4 text-center text-slate-700 text-2xl font-extrabold font-['Avenir']">Vehicle Details</h2>
                    <div className="form-group flex flex-col mb-4">
                        <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="description">
                            Car Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-72 h-9 rounded-lg border border-neutral-400"
                            required
                        />
                    </div>
                    <div className="form-group flex flex-col mb-4">
                        <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="carColor">
                            Car Color
                        </label>
                        <input
                            type="text"
                            id="carColor"
                            name="carColor"
                            value={formData.carColor}
                            onChange={handleInputChange}
                            className="w-72 h-9 rounded-lg border border-neutral-400"
                            required
                        />
                    </div>
                    <div className="form-group flex flex-col mb-4">
                        <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="licensePlate">
                            License Plate
                        </label>
                        <input
                            type="text"
                            id="licensePlate"
                            name="licensePlate"
                            value={formData.licensePlate}
                            onChange={handleInputChange}
                            className="w-72 h-9 rounded-lg border border-neutral-400"
                            required
                        />
                    </div>
                    <div className="form-group flex flex-col mb-4">
                        <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="seatCapacity">
                            Seat Capacity
                        </label>
                        <input
                            type="number"
                            id="seatCapacity"
                            name="seatCapacity"
                            value={formData.seatCapacity}
                            onChange={handleInputChange}
                            className="w-72 h-9 rounded-lg border border-neutral-400"
                            required
                        />
                    </div>
                </div>
            );
        }
        if (props.role === "Org") {
            return (
                <div className="bg-slate-100 rounded-lg">
                    <h2 className="mb-4 text-center text-slate-700 text-2xl font-extrabold font-['Avenir']">Organization Signup</h2>
                    <div className="form-group flex flex-col mb-4">
                        <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="organizationName">
                            Organization Name:
                        </label>
                        <input
                            type="text"
                            id="organizationName"
                            name="organizationName"
                            value={formData.organizationName}
                            onChange={handleInputChange}
                            className="w-72 h-9 rounded-lg border border-neutral-400"
                        />
                    </div>
                    <div className="form-group flex flex-col mb-4">
                        <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-72 h-9 rounded-lg border border-neutral-400"
                        />
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="user-form bg-slate-100 p-4 rounded-[20px]">
            <h1 className="mb-4 text-center text-slate-700 text-2xl font-extrabold font-['Avenir']">Please enter your personal information:</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group flex flex-col mb-4">
                    <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-72 h-9 rounded-lg border border-neutral-400"
                        required
                    />
                </div>
                <div className="form-group flex flex-col mb-4">
                    <label className="w-28 h-5 text-black text-sm font-normal font-['Avenir']" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-72 h-9 rounded-lg border border-neutral-400"
                        required
                    />
                </div>
                {renderAdvancedForm()}
                <div className="flex justify-between">
                      <button
                          type="button" 
                          onClick={handlePrevious} 
                          className="bg-slate-300 hover:bg-slate-400 text-black font-extrabold p-2 rounded-lg mt-4"
                      >
                          Previous
                      </button>
                      <button
                          type="submit"
                          className="w-20 bg-gray-700 hover:bg-gray-800 text-white font-extrabold p-2 rounded-lg mt-4"
                      >
                          {'>'}
                      </button>
                  </div>
            </form>
        </div>
    );
}
