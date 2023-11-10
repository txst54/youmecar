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
                <div className="p-2 font-extrabold z-['Avenir']">Welcome {getAuth().currentUser.displayName.split(" ")[0]}!</div>
                <div onClick={() => signOut()} className="p-2 hover:cursor-pointer border border-black rounded-xl">Log out</div>
            </div>
        );
    } else {
        if (location.pathname === "/riderpickup") {
            return (
                <div className="flex justify-between px-7 py-10">
                    <Link to="/otherpage" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <div className="p-2 font-normal text-2xl font-bold z-['Avenir']">Thanksgiving Dinner</div>
                    </Link>
                    <div className="flex">
                        <Link to="/login" className="p-2 font-normal z-['Avenir']">Log in</Link>
                        <div className="border border-black rounded-lg p-2 font-normal z-['Avenir']">Sign up</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="flex justify-end px-7 py-10">
                    <Link to="/login" className="p-2 font-normal z-['Avenir']">Log in</Link>
                    <div className="border border-black rounded-lg p-2 font-normal z-['Avenir']">Sign up</div>
                </div>
            );
        }
    }
}