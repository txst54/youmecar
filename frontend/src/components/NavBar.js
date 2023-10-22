import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function NavBar(props) {
    const signOut = () => {
        getAuth().signOut();
        props.setSignedIn(false);
    }

    if (props.signedIn) {
        return (
            <div className="flex justify-end py-10 px-7">
                <div className="p-2">Welcome {getAuth().currentUser.displayName.split(" ")[0]}!</div>
                <div onClick={() => signOut()} className="p-2 hover:cursor-pointer border border-black rounded-xl">Log out</div>
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