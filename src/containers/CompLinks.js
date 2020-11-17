import React from 'react'
import { Link } from "react-router-dom";

class Links extends React.Component{
    render(){
        return(
            <div>
                    <div className="btn-group">
        <select name="devices">
        <optgroup label="All Categories">rtet</optgroup>
        <optgroup label="All Categories">
        <option value={1}>Mobile Phone</option>
        <br />
        <br />
        <option value={2}>Gaming PS</option>
        </optgroup>
        </select>
        <Link className="headerlinks"to="/mobilephones">Mobile Phones </Link>
        <Link className="headerlinks"to="/cars">Cars </Link>
        <Link className="headerlinks"to="/motorcycles">Motorcycles </Link>
        <Link className="headerlinks"to="/houses">Houses </Link>
        <Link className="headerlinks"to="/tv-video-audio">TV - Video - Audio </Link>
        <Link className="headerlinks"to="/tablets">Tablets </Link>
        <Link className="headerlinks"to="/plots">Land & Plots</Link>
        </div>
        <br />
        <br />
            </div>
        )
    }
}
export default Links