import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Plots extends React.Component{
    render(){
        return(
            <div>
                <h1>Plots</h1>
                <button>Post ad</button>
            </div>
        )
    }
}
export default (Plots);
