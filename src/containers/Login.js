import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {set_data, facebook_login } from '../store/action'

class Login extends React.Component{
    render(){
        console.log("Props==>",this.props)
        return(
         <div>
         <center><img className="loginImg" src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp"width="100"height="100" /><p>Help make OLX safer place to buy and sell</p></center>
     
          <br />
          <br />
          <br />
          <div className="container">
          <div className="row">
          <center><button className="auth-btn">Continue with phone</button></center>
          <center><button onClick={ () => this.props.facebook_login()} className="auth-btn"><i class="fa fa-facebook-square" aria-hidden="true"></i> Continue with facebook</button></center>
          <center><button className="auth-btn"><i class="fa fa-google" aria-hidden="true"></i> Continue with google</button></center>
          <center><button className="auth-btn">Continue with email</button></center>
          <center><p className="form-details">We won't share your personal details with anyone</p></center>
          <p className="privacy-terms">If you continue, you are accepting <Link>OLX Terms and Conditions and Privacy Policy</Link></p>
          </div>
          </div>
     {/* <button onClick={this.gotohome}>Go to home</button> */}

    
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.users
   })
   

const mapDispatchToProps = (dispatch) =>({

facebook_login: () => dispatch(facebook_login())

})
export default connect(mapStateToProps, mapDispatchToProps)(Login);