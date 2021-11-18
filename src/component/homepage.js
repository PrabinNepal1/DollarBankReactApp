import React from 'react';
import {Link} from 'react-router-dom';


export default function Homepage(){
        return (
            <div className="App">
                <header className="App-header">
                    Dollar Bank Application
                </header>
             <div className="App-body">
                <div className="button-holder">
                    <button><Link to="/registration">Create Account</Link></button> 
                </div>
                <div className="button-holder">
                    <button><Link to="/login">Login</Link></button> 
                </div>
            </div>

            </div>
        );
    }
