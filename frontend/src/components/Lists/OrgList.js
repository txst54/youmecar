import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

export default function OrgList(props) {
    const dbRef = ref(getDatabase());
    
    const [joining, setJoining] = useState(false);
    const [formData, setFormData] = useState({orgUID: ''});
    const [editMode, setEditMode] = useState(false);
    const [orgList, setOrgList] = useState(undefined);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handlePrevious = () => {
        setJoining(false);
        setEditMode(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setJoining(false);
        const body = formData;
        body.role = props.role;
        getAuth()
            .currentUser.getIdToken()
            .then((idToken) => {
                fetch("http://localhost:5000/join-org", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "idtoken": idToken,
                    },
                }).then((response) => {
                    if (response.ok) {
                        setJoining(false);
                        setEditMode(false);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const renderJoinOrg = () => {
        setJoining(true);
        setEditMode(false);
    }

    const renderEditOrg = () => {
        if (!editMode) {
            setEditMode(true); 
        } else {
            setEditMode(false); 
        }
    }

    const removeOrg = (org) => {
        const newOrgList = { ...orgList };
        delete newOrgList[org];
        setOrgList(newOrgList);
        setEditMode(false); 
    };

    // TESTING
    useEffect(() => {
        const sampleOrgList = {
            org1: "Acts College Fellowship",
            org2: "Texas Gamma Beta",
            org3: "Texas Blockchain",
            org4: "Texas Taekwondo",
            org5: "Longhorn Racing",
        };
        setOrgList(sampleOrgList);
    }, []);

    let out = <div></div>
    if (!joining) {
        out = [];
        if (orgList === undefined) {
            get(child(dbRef, props.role + '/' + props.user.uid + '/orgs')).then((snapshot) => {
                if (snapshot.exists()) {
                    setOrgList(snapshot.val());
                }
                else {
                    setOrgList([]);
                }
            }).catch((error) => {
                console.log(error);
            })
        }
        else {
            if (editMode) {
                out.push(
                    <div className="flex mr-6" key="orgs-container">
                        <div className="edit-list">
                            {orgList && Object.keys(orgList).map((org) => (
                                <svg key={org} onClick={() => removeOrg(org)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer right-8 h-7 w-6 mt-3 relative">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ))}
                        </div>
                        <div className="org-list">
                            {Object.keys(orgList).map((org) => (
                                <div key={org} onClick={() => props.onClick(org)}>
                                    <div className="flex justify-center hover:cursor-pointer text-center text-slate-700 text-2xl font-extrabold z-['Avenir'] mt-2">
                                        {orgList[org]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            } else {
                out.push(
                    <div className="org-list">
                        {Object.keys(orgList).map((org) => (
                            <div key={org} onClick={() => props.onClick(org)}>
                                <div className="flex justify-center hover:cursor-pointer text-center text-slate-700 text-2xl font-extrabold z-['Avenir'] mt-2">
                                    {orgList[org]}
                                </div>
                            </div>
                        ))}
                    </div>
            );
            }
            if (Object.keys(orgList).length === 0) {
                out.push(
                    <div key="empty-message" onClick={() => renderJoinOrg()} className="hover:cursor-pointer z-['Avenir'] text-center text-slate-700 mt-4">
                        You aren't in any orgs. Click here to join one!
                    </div>
                );
            } else {
                out.push(
                    <div className="flex justify-center space-x-20 mt-4" key="action-buttons">
                        <div key={"add"} onClick={() => renderJoinOrg()} className="hover:cursor-pointer z-['Avenir'] text-sm">Add</div>
                        <div key={"edit"} onClick={() => renderEditOrg()} className="hover:cursor-pointer z-['Avenir'] text-sm">Edit</div>
                    </div>
                );
            }
        }
    } else {
        out = <div className="user-form bg-slate-100 p-4 rounded-[20px] shadow">
                <h1 className="text-center text-slate-700 text-2xl font-extrabold z-['Avenir']">Please Enter Organization Join Code:</h1>
                <h1 className="mb-4 text-center text-slate-700 text-xl z-['Avenir']">If you do not have one, contact your organization admin.</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group flex flex-col mb-4">
                        <label className="text-black text-sm font-normal z-['Avenir']" htmlFor="name">
                            Organization Join Code
                        </label>
                        <input
                            type="text"
                            id="orgUID"
                            name="orgUID"
                            value={formData.orgUID}
                            onChange={handleChange}
                            className="w-72 h-9 rounded-lg border border-neutral-400"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button" 
                            onClick={handlePrevious} 
                            className="bg-slate-300 hover:bg-slate-400 text-black font-extrabold p-2 rounded-lg mt-4"
                        >
                            Previous
                        </button>
                        <button
                            type="submit"
                            className="w-20 bg-gray-700 hover:bg-gray-800 text-white font-extrabold p-2 rounded-lg mt-4"
                        >
                            {'>'}
                        </button>
                    </div>
                </form>
        </div>
    }

    return out;
}