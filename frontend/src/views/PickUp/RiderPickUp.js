import React, { useState } from "react";
import Dropdown from "../../components/PageComponents/Dropdown";
import BoxOfCars from "../../components/PageComponents/BoxOfCars";
import EventInfoBanner from "../../components/PageComponents/Banners/EventInfoBanner";

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
        <div className="pickup-page bg-youmeblue font-['Avenir']">
            <div className="flex items-center justify-center">
                <EventInfoBanner />
            </div>
            <div className="flex items-center justify-center h-32">
                <Dropdown locations={locations} onChange={handleLocationChange} />
                <button onClick={handlePickupRequest}>Request Pickup</button>
            </div>
            
            <BoxOfCars carArray={cars} />
        </div>
    );
}