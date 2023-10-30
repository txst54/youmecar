import React, { useState } from "react";
import Dropdown from "../../components/PageComponents/Dropdown";
import BoxOfCars from "../../components/PageComponents/BoxOfCars";

// replace with locations from drivers
const locations = {
    "Location A": "Location A",
    "Location B": "Location B",
    "Location C": "Location C"
};

// imports dropdown menu
export default function RiderPickUp() {
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handlePickupRequest = () => {
        // Handle pickup request with selectedLocation
        console.log("Selected Location:", selectedLocation);
        // Perform actions like sending the pickup request to the server
    };

    // replace with driver information
    const cars = [
        { numCols: 4 },
        { numCols: 3 },
        { numCols: 5 },
    ];

    return (
        <div className="pickup-page">
            <div className="flex items-center justify-center h-32">
                <h1>Rider Pickup</h1>
                <p>Select your pickup location:</p>
                <Dropdown locations={locations} onChange={handleLocationChange} />
                <button onClick={handlePickupRequest}>Request Pickup</button>
            </div>
            
            <BoxOfCars carArray={cars} />
        </div>
    );
}