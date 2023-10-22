import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    if (props.signedIn) {
        return (
            <div className="flex justify-end">
                <div onClick={() => props.setSignedIn(false)}>Log out</div>
                <div></div>
            </div>
        );
    }
    else {
        return (
            <div className="flex justify-end px-7 py-10">
                <Link to="/login" className="p-2 font-normal font-['Avenir']">Log in</Link>
                <div className="border border-black rounded-lg p-2 font-normal font-['Avenir']">Sign up</div>
            </div>
        );
    }
}