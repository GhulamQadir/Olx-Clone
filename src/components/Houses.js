import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Houses extends React.Component{
    render(){
        return(
            <div>
                <h1>Houses</h1>
                <button>Post ad</button>
            </div>
        )
    }
}
export default (Houses);
