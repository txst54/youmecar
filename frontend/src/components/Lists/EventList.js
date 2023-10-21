import React from "react";

export default function EventList(props) {
    let out = [];
    for (let event in props.events) {
        out.push(
            <div onClick={() => props.onClick(event)}>
                <div>Event: {event.name}</div>
                <div>{event.desc}</div>
            </div>
        );
    }
    return out;
}