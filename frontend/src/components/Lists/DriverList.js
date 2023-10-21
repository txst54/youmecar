import React from "react";

export default function DriverList(props) {
    let out = [];
    for (let driver in props.drivers) {
        if (driver.isApproved && driver.inEvent(props.event)) {
            out.push(<div>Drivers: {driver.name}</div>);
        }
    }
    return out;
}