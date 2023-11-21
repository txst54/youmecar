import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import {Link} from "react-router-dom";

export default function EventList(props) {
    const db = ref(getDatabase());

    const [events, setEvents] = useState(undefined);

    if (events === undefined) {
        get(child(db, 'orgs/' + props.org + '/events/')).then((snapshot) => {
            if (snapshot.exists()) {
                setEvents(snapshot.val());
            }
            else {
                setEvents([]);
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    let out = [];
    console.log(props.events);
    for (let event in props.events) {
        out.push(
            <Link to={"/events/" + event.id}>
                <div>Event: {event.name}</div>
                <div>{event.desc}</div>
            </Link>
        );
    }
    return out;
}