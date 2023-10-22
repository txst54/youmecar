import React, { useState } from "react";
import { getAuth } from "firebase/auth";

export default function OrgList(props) {
    const [joining, setJoining] = useState(false);
    const [formData, setFormData] = useState({orgUID: ''});
    const [orgList, setOrgList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setJoining(false);
        const body = formData;
        body.role = props.role;
        console.log(body)
        getAuth()
            .currentUser.getIdToken()
            .then((idToken) => {
                fetch("http://localhost:5000/join-org", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "idtoken": idToken,
                    },
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
    }

    let out = <div></div>
    if (!joining) {
        out = [];
        for (let org in props.user.orgList) {
            out.push(
                <div key={org.name} onClick={() => props.onClick(org)}>
                    <div>Organization: {org.name}</div>
                    <div>Desc: {org.desc}</div>
                </div>
            );
        }
        // add an check empty: if list is empty say "you arent in any orgs, click here to join one!"
        out.push(<div key={""} onClick={() => renderJoinOrg()} className="hover:cursor-pointer">Join Organization</div>)
    }
    else {
        out = <div>
            <div>Please Enter Organization Join Code: </div>
            <div>If you do not have one, contact your organization admin. </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" id="orgUID" name="orgUID" value={formData.orgUID} onChange={handleChange} required/>
                <input type="submit" value="Join"></input>
            </form>
        </div>
    }
    return out;
}