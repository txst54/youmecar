import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

export default function OrgList(props) {
    const dbRef = ref(getDatabase());
    
    const [joining, setJoining] = useState(false);
    const [formData, setFormData] = useState({orgUID: ''});
    const [orgList, setOrgList] = useState(undefined);

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
    }

    let out = <div></div>
    if (!joining) {
        out = [];
        if (orgList == undefined) {
            get(child(dbRef, props.role + '/' + props.user.uid + '/orgs')).then((snapshot) => {
                if (snapshot.exists()) {
                    setOrgList(snapshot.val());
                }
                else {
                    setOrgList([]);
                }
            }).catch((error) => {
                // console.log(error);
            })
        }
        else {
            for (let org of Object.keys(orgList)) {
                out.push(
                    <div key={org} onClick={() => props.onClick(org)}>
                        <div>Organization: {orgList[org]}</div>
                    </div>
                );
            }
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