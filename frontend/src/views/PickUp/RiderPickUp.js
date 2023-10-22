import React, { useState } from "react";
import Dropdown from "../../components/PageComponents/Dropdown";
import Car from "../../components/PageComponents/Car";

const locations = {
    // replace with locations from drivers
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

    return (
        <div className="pickup-page">
            <h1>Rider Pickup</h1>
            <p>Select your pickup location:</p>
            <Dropdown locations={locations} onChange={handleLocationChange} />
            <button onClick={handlePickupRequest}>Request Pickup</button>

            <Car />
        </div>
    );
}