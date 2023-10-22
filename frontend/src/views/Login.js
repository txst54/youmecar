import React from "react";
import { signInWithPopup } from "firebase/auth";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSignOn = () => {
        signInWithPopup(this.props.auth, this.props.provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            // window.user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            this.props.setSignedIn(true);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    render() {
        // rect is at same relative height to the rect on next page
        return (
            <div className="flex justify-center items-center h-screen bg-youmeblue">
                <div className="Rectangle3 w-[811px] h-[450px] bg-slate-100 rounded-[20px] shadow mt-[-305px]">
                    <div className="flex flex-col items-center mb-64">
                        <p className="text-3xl font-extrabold font-['Avenir'] mb-8 mt-20">Login</p>
                        <div onClick={this.handleSignOn} className="bg-gray-700 hover:bg-blue-700 text-white font-extrabold font-['Avenir'] py-4 px-8 rounded cursor-pointer mt-40">
                            Login with Google
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}