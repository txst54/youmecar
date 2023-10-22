import React from "react";

export default function Dropdown(props) {
    return (
        <select>
            {Object.keys(props.locations).map(location => (
                <option key={location} value={location}>
                    {location}
                </option>
            ))}
        </select>
    );
}