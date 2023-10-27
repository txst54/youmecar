import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

export default function EventList(props) {
    const db = ref(getDatabase());

    const [events, setEvents] = useState({});

    if (events == undefined) {
        get(child(db, 'orgs/' + props.org + '/events/')).then((snapshot) => {
            if (snapshot.exists()) {
                setEvents(snapshot.val());
            }
            else {
                setEvents([]);
            }
        }).catch((error) => {
            // console.log(error);
        })
    }
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