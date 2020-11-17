import React from 'react'
import firebase from '../config/firebase'
import Header from '../containers/Header'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Footer1 from '../components/footer'


class Cars extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/wls6qvd99llf-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 2,940,000</h5>
                <p>2018 - 33,000 km</p>
                <p className="cardtext">TOYOTA COROLLA GLI 2018</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/d3h7manwjdu21-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,500,000</h5>
                <p>2015 - 36,000 km</p>
                <p className="cardtext">Land Rover Defender Soft..</p>
                </div>
                </div>
                </div> 
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/0raacvxp5hqd-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 2,600,000</h5>
                <p>2015 - 75,000 km</p>
                <p className="cardtext">Honda Civic Prosmetic 1...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/dw6wzrv2o4cv2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 1,450,000</h5>
                <p>2011 - 130,000 km</p>
                <p className="cardtext">Honda civic rebon Oriel 20..</p>
                </div>
                </div>
                </div>
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/8xbmkxn248or1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 2,250,000</h5>
                <p>2014 - 133,000 km</p>
                <p className="cardtext">Honda civic rebirth</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/yrirmfx2je2f3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 330,000</h5>
                <p>1999 - 119,200 km</p>
                <p className="cardtext">Mehran VXR good condition</p>
                </div>
                </div>
                </div> 
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/71ezeiqal7as1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 1,890,000</h5>
                <p>2018 - 7,850 km</p>
                <p className="cardtext">Swift 2018 brand new</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/iq2h2stmo4ho3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 890,000</h5>
                <p>1999 - 100,000 km</p>
                <p className="cardtext">Honda civic vti oriel</p>
                </div>
                </div>
                </div>
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/9vlu4voeq1g32-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 1,950,000</h5>
                <p>2010 - 109,000 km</p>
                <p className="cardtext">Toyota Prius S package 2...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/dn02wght8yj51-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 2,175,000</h5>
                <p>2014 - 124,000 km</p>
                <p className="cardtext">TOYOTA AQUA S PUSH ST..</p>
                </div>
                </div>
                </div> 
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/8bbma61p17683-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 2,775,000</h5>
                <p>2015 - 75,999 km</p>
                <p className="cardtext">Honda Jade Hybrid AT Pu..</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/xck5br8ik8pp3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,225,000</h5>
                <p>2020 - 16,000 km</p>
                <p className="cardtext">B2b Geniune Zero Meter 20...</p>
                </div>
                </div>
                </div>
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/q0x1mnffb74e1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 2,295,000</h5>
                <p>2016 - 40,000 km</p>
                <p className="cardtext">Toyota Vitz F Package No..</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/vn9z6w3nrice3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 450,000</h5>
                <p>2004 - 95,000 km</p>
                <p className="cardtext">Suzuki cultus 2004</p>
                </div>
                </div>
                </div> 


                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/v6wbuy3jw476-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 623,000</h5>
                <p>2020 - 15 km</p>
                <p className="cardtext">Cultus AGS, VXR, VXL</p>
                </div>
                </div>
                </div>
            
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/1g7qa356rzgn1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,190,000</h5>
                <p>2017 - 42,000 km</p>
                <p className="cardtext">UK charming red civic 201...</p>
                </div>
                </div>
                </div>
                </div>
                <br />
                
                <center><button className="loadmore">Load more</button></center>
                <Footer1 />
            </div>
            </div>
        )
    }
}
export default Cars;
