import React from "react";

export default function Banner(props) {
    return (
        <section>
            <div>{props.title}</div>
            <div>{props.subtitle}</div>
        </section>
    );
}