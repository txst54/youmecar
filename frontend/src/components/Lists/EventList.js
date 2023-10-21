import React from "react";

export default function EventList(props) {
    let out = [];
    for (let event in props.events) {
        out.push(<div>Event: {event.name}</div>);
        out.push(<div>Desc: {event.desc}</div>)
    }
    return out;
}