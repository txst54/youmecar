import React from "react";

export default function EventPage(props) {
    return (
        <section>
            <div>{props.eventName}</div>
            <div>{props.eventDesc}</div>
        </section>
    );
}