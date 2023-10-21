import React from "react";

export default function NavBar(props) {
    if (props.signedIn) {
        return (
            <div>
                <div>Log out</div>
                <div></div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div>Log in</div>
                <div>Sign up</div>
            </div>
        );
    }
}