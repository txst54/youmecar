import React from "react";
import GeneralSignup from "./GeneralSignup";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: undefined};
    }

    render() {
        const userRole = this.state.role;
        return(
            <div>
            {userRole == undefined ? 
                <div>
                    <div>I am a: </div>
                    <div onClick={() => this.setState({role: "Rider"})} className="hover:cursor-pointer">Rider</div>
                    <div onClick={() => this.setState({role: "Driver"})} className="hover:cursor-pointer">Driver</div>
                    <div onClick={() => this.setState({role: "Org"})} className="hover:cursor-pointer">Organization</div>
                </div>
            :
            <GeneralSignup role={userRole} />
            }
            </div>
        );
    }
}