import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSignOn = () => {
        signInWithPopup(this.props.auth, this.props.provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            // window.user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            this.props.setSignedIn(true);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    render() {
        return (
            <div className="flex justify-center items-center h-screen">
                <div onClick={this.handleSignOn} className="bg-gray-700 text-white py-4 px-8 rounded cursor-pointer">
                    Login with Google
                </div>
            </div>
        );
    }
}