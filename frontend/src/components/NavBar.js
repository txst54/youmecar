import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function NavBar(props) {
    const location = useLocation();

    const signOut = () => {
        getAuth().signOut();
        props.setSignedIn(false);
    }

    if (props.signedIn) {
        return (
            <div className="flex justify-end py-10 px-7">
                <div className="p-2 font-extrabold font-['Avenir']">Welcome {getAuth().currentUser.displayName.split(" ")[0]}!</div>
                <div onClick={() => signOut()} className="p-2 hover:cursor-pointer border border-black rounded-xl">Log out</div>
            </div>
        );
    } else {
        if (location.pathname === "/riderpickup") {
            return (
                <div className="flex justify-between px-7 py-10">
                    <Link to="/otherpage" className="flex items-center">
                        <svg class="-mr-1 h-7 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" transform="rotate(90)">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        <div className="p-2 font-normal text-2xl font-bold font-['Avenir']">Thanksgiving Dinner</div>
                    </Link>
                    <div className="flex">
                        <Link to="/login" className="p-2 font-normal font-['Avenir']">Log in</Link>
                        <div className="border border-black rounded-lg p-2 font-normal font-['Avenir']">Sign up</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="flex justify-end px-7 py-10">
                    <Link to="/login" className="p-2 font-normal font-['Avenir']">Log in</Link>
                    <div className="border border-black rounded-lg p-2 font-normal font-['Avenir']">Sign up</div>
                </div>
            );
        }
    }
}