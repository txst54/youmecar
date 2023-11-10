import React from "react";
import GeneralSignup from "./GeneralSignup";
import carImage from "../../assets/car.png";
import orgImage from "../../assets/organization.png";
import personImage from "../../assets/person.png";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: undefined}; 
    }

    render() {
        const userRole = this.state.role;
        const rectHeight = userRole === "Rider" ? "h-[350px]" : "h-[450px]";
        return(
            <div className="flex flex-col items-center h-screen bg-youmeblue">
                <div className="Rectangle3 w-[811px] bg-slate-100 rounded-[20px] shadow top-1/2 left-1/2">
                    
                    {userRole === undefined ? 
                        <div className="text-center mt-9">
                            <div className="mb-10 text-center text-slate-700 text-2xl font-extrabold z-['Avenir']">Choose Your Role:</div>
                            <div className="flex justify-between">
                                <img src={personImage} alt="Role Page" className="w-1/4 ml-10" />
                                <img src={carImage} alt="Role Page" className="w-1/4" />
                                <img src={orgImage} alt="Role Page" className="w-1/4 mr-10" />
                            </div>
                            <button
                                onClick={() => this.setState({ role: "Rider" })}
                                className="bg-gray-700 hover:bg-blue-700 text-white font-extrabold z-['Avenir'] py-2 px-4 rounded mb-2 mt-8 mr-48"
                            >
                                Rider
                            </button>
                            <button
                                onClick={() => this.setState({ role: "Driver" })}
                                className="bg-gray-700 hover:bg-blue-700 text-white font-extrabold z-['Avenir'] py-2 px-4 rounded mb-2 mt-4 mr-40"
                            >
                                Driver
                            </button>
                            <button
                                onClick={() => this.setState({ role: "Org" })}
                                className="bg-gray-700 hover:bg-blue-700 text-white font-extrabold z-['Avenir'] py-2 px-4 rounded mb-24"
                            >
                                Organization
                            </button>
                        </div>
                    :
                    <GeneralSignup role={userRole} setRole={(val) => this.setState({role: val})} />
                    }
                </div>
            </div>
        );
    }
}

