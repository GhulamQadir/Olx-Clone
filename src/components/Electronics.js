import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../containers/Header'
import Footer1 from '../MainPage/footer'


class Electronics extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/zjv36xzdvojs3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 6,500</h5>
                <p className="cardtext">T95 max+ 8k smart androi...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/l3t1dwgqa8643-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 3,299</h5>
                <p className="cardtext">X96 mini 2/16 Android 9 s...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/yiho4655ek3v-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 77,000</h5>
                <p className="cardtext">Full HD Multimedia Projec...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/8fh242286tpm1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 55,000</h5>
                <p className="cardtext">60" smart Wi-Fi LEDTV.</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
                
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/imgmj64c3fc8-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,000</h5>
                <p className="cardtext">Pinear Speaker 9/6 with ba...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/yankff4x1y92-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 51,000</h5>
                <p className="cardtext">QSC Power Amplifier (MOD...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/oaxwoysubt362-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 2,000</h5>
                <p className="cardtext">New ION Turntable</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/6j7tt6bzz5ms-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 15,000</h5>
                <p className="cardtext">LG Magic Remote MR600 o...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
                

                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/lm96n3ehwh0r2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,999</h5>
                <p className="cardtext">کم قیمت Walkie talkie New T...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/r96634qfww6g3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 24,999</h5>
                <p className="cardtext">Eco Star LED 40 inches Full...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/cal3539ndj7u-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 250</h5>
                <p className="cardtext">English Original cassette U...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/xfncbge3osgl-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 6,600</h5>
                <p className="cardtext">Dish antenna sales & fitting</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
                

                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/e68cpmajf0r83-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 5,000</h5>
                <p className="cardtext">Jabra talk 2 bluetooth han...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/auwrhj4l0p1e-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 9,900</h5>
                <p className="cardtext">SMD Screens all Sizes and...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/h8dezqafotij2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 1,000</h5>
                <p className="cardtext">Home made AUX speaker f...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/cgpiwbwtkspl1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,000</h5>
                <p className="cardtext">WLN KD-C1 UHF Walkie Tal...</p>
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
export default (Electronics);
