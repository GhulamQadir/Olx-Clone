import React from 'react';
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { facebook_login } from '../store/action'
import { connect } from 'react-redux'

class AdPosting extends React.Component {
  constructor() {
    super()
    this.state = {
      makeVal: "",
      file: null,
      titleVal: "",
      descriptVal: "",
      priceVal: "",
      
    }


  }


  post = () =>{
   console.log(this.state)
  }

//   set_data = () =>{
//   this.setState({
//     price: this.state.priceVal,
//     title: this.state.titleVal,
//     file: this.fileVal,
//   })
// }


  upload_img = () => {
    // console.log("file", this.state.file)
    var ref = firebase.storage().ref('/').child(`images/${this.state.file.name}`).put(this.state.file)
    ref.on('state_changed', function (snapshot) {

    }, function (error) {
    }, function () {
      ref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
      });
    });
  }
  
  render() {
    // let user = this.props.current_user
    // const productinfo = {price: this.state.priceVal, title: this.state.titleVal, file: this.state.file}
    return (
      <div>
        {/* <MobilePhones  product={productinfo} /> */}
        {/* <MobilePhones price={this.state.priceVal} img={this.state.fileVal} title={this.state.titleVal} /> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src="data:image/png;base64,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" height="40px" width="60px" /></a>
        </nav>

        <div className="container">
          <center><h4>POST YOUR AD</h4></center>

          <div className="center">
            <div className="category">
              <p className="selectedCategory">Selected category</p>
              <br />
              <p className="mobiles">Mobiles  <Link className="change">Change</Link></p>
            </div>

            <p className="details">Include some details</p>
            <br />

            <p className="make">Make *</p>
            <input name="make" onChange={(e)=>this.setState({makeVal: e.target.value})} className="mobileName" type="text" />

            <br />
            <br />
            <p className="condition">Condition *</p>
            <button className="conditionBtn">New</button>
            <button className="conditionBtn">Used</button>
            <br />
            <br />

            <p className="adTitle">Ad Title *</p>
            <input name="title" onChange={(e)=>this.setState({titleVal: e.target.value})} className="titleValue" type="text" />
            <br />
            <p className="guide">Mention the key features of your item (e.g. brand, <br />
            model, age, type)</p>

            <br />
            <p className="description">Description *</p>
            <input name="description" onChange={(e)=>this.setState({descriptVal: e.target.value})} className="descriptValue" type="text" />
            <br />
            <p className="guide">Include condition, features and reason for selling</p>
            <br />
            <br />
            <br />

            <p className="setPrice">Set a price</p>
            <p className="price">Price*</p>
            <input name="title" onChange={(e)=>this.setState({priceVal: e.target.value})} className="priceValue" type="number" />            <br />
            <br />
            <br />

            <p className="uploadPhotos">Upload up to 12 photos</p>

            <div className="row">
              <div className="col-md-2 photos">
                <div>
                  <p><i onClick={this.upload_img} class="fa fa-camera" aria-hidden="true"></i> <br />Add Photo</p>
                  <input type="file" onChange={(e) => this.setState({ file: e.target.files[0] })} />
                </div>
              </div>

              <div className="col-md-2 photos">
                <div>
                  <p><i onClick={this.upload_img} class="fa fa-camera" aria-hidden="true"></i> <br />Add Photo</p>
                  <input type="file" onChange={(e) => this.setState({ file: e.target.files[1] })} />
                </div>
              </div>

              <div className="col-md-2 photos">
                <div>
                  <p><i onClick={this.upload_img} class="fa fa-camera" aria-hidden="true"></i> <br />Add Photo</p>
                  <input type="file" onChange={(e) => this.setState({ file: e.target.files[2] })} />
                </div>
              </div>
              <br />
              <br />
            </div>
            <p className="required">This field is mandatory</p>
            <br />
            <br />
            <br />
            <h5 className="location">Confirm your location</h5>
            <div className="row">
              <div className="col-md-3">
                <p className="locationList">List</p>
                <hr />
              </div>

              <div className="col-md-3">
                <p className="">Current location</p>
              </div>
            </div>
            <br />

            <p className="make">State *</p>
            <input  required="required" className="state" type="text" />
            <br />
            <br />
            <p className="required">This field is mandatory</p>
            <br />
            <br />
            <br />

            <h5 className="details">Review your details</h5>
            <br />
            <img className="userAccount" src="" alt="" />
            <p>Name<br /><br />
            <input value="..." className="userName" type="text" /></p>
            <br />
            <br />

            <h5 className="verifyAccount">Let's Verify your account</h5><br />
            <p className="confirmCode">We will send you a confimation code by sms<br /> on the next step</p>
            <br />
            <br />
            <p className="phoneNum">Mobile Phone Number *</p>
            <input required="required" className="state" type="text" />
            <br />
            <br />
            <p className="showNum">Show my phone number on my ads</p>
            <br />
            <br />
            <br />
            {/* <button onClick={() =>this.set_data()}>set_data</button> */}
            <button onClick={() =>this.post()} className="post"><Link to="/mobilephones">Post now</Link></button>
          </div>


        </div>

      </div>
    )
  }
}
// const mapStateToProps = (state) => ({
//   current_user: state.current_user,

// })
// const mapDispatchToProps = (dispatch) => ({
//   post_ad: () => dispatch(post_ad()),
// })


// export default connect(mapStateToProps, null)(AdPosting);
export default AdPosting;

//<input value={this.state.price} onChange={(e) => this.setState({price: e.target.value})} className="priceValue" type="text" />


// onChange={(e)=> this.handleChange(e)

//<MobilePhones price={this.state.priceVal} img={this.state.fileVal} title={this.state.titleVal} />