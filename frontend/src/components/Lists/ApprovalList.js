import React from "react";

export default function PendingList(props) {
    let out = [];
    for (let driver in props.drivers) {
        if (!driver.isApproved) {
            out.push(<div>Driver: {driver.name}</div>);
        }
    }
    return out;
}