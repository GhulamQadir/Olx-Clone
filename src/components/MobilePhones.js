import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { upload_img, post } from '../MainPage/AdPosting'
import { connect } from 'react-redux';
// import { post_ad } from '../store/action/'

class MobilePhones extends React.Component{

    render(){
        // console.log("props===>", this.props)
        return(
            <div>
                {/* <h1>{this.props.name}</h1> */}
            <div className="card" style={{width: '18rem'}}>
            <img src={this.props.img} className="card-img-top" alt="" />
            <div className="card-body">
            <h5 className="card-text">Rs {this.props.price}</h5>
            <p className="card-text">{this.props.title}</p>
            </div>
            </div>    
            </div>
        )
    }
}


// const mapStateToProps = (state) => ({
//         users: state.users,
        
//     })
//     const mapDispatchToProps = (dispatch) => ({
//      post_ad: () => dispatch(post_ad())
        
//     })
// export default connect(mapStateToProps, mapDispatchToProps)(MobilePhones);
export default (MobilePhones)