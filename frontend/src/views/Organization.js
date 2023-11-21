import Banner from "../components/PageComponents/Banners/Banner";
import EventList from "../components/Lists/EventList";
import React from "react";

export default function Organization(props) {
    return (
        <div>
            <Banner title={props.org.name} subtitle={props.org.desc}/>
            <EventList
                events = {props.org.events}
                user = {props.user}
            />
        </div>
    );
}