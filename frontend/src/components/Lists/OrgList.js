import React from "react";

export default function OrgList(props) {
    let out = [];
    for (let org in props.orgs) {
        if (props.user.inOrg(org)) {
            out.push(
            <div onClick={() => props.onClick(org)}>
                <div>Organization: {org.name}</div>
                <div>Desc: {org.desc}</div>
            </div>);
        }
    }
    return out;
}