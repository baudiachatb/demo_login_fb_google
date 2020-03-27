import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from "react-google-login";

class App extends Component {


    render() {
        const onGoogleLoginSuccess = (response) => {
            console.log(response);
        };
        return (
            <div className="App">
                <GoogleLogin onSuccess={onGoogleLoginSuccess}
                             onFailure={onGoogleLoginSuccess}
                             clientId={'486030383439-u2heo6q9nqql23u608bqjhj54i9qudco.apps.googleusercontent.com'}>

                </GoogleLogin>
            </div>
        )
    }

}

export default App;
