import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../containers/Header'
import Footer1 from '../components/footer'


class Motorcycles extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/825d7ji4u5281-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 330,000</h5>
                <p className="cardtext">RE 2019 model at Bullet 1 Motorsports</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/emttrq19h7bv1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 10,700</h5>
                <p className="cardtext">Brand new Honda 125 on...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/xe9c7400uttj3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 400,000</h5>
                <p className="cardtext">250cc heavy bike fresh im...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/3idu82mj8fbe1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 166,000</h5>
                <p className="cardtext">Yamaha ybr 125 2020 mod...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
                

                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/pafozebtsjxl2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 175,000</h5>
                <p className="cardtext">Yamaha YBR 125Cc Derk Blu</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/uq8mqcwsyct63-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 25,000</h5>
                <p className="cardtext">I am selling honda 100 cc...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/g7a8qdvgs42k3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 15,000</h5>
                <p className="cardtext">Kawasaki GTO 125</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/a2oofsx237hn3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 420,000</h5>
                <p className="cardtext">Heavy bikes 200CC 250C...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/u70xg79ta4hl-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 420,000</h5>
                <p className="cardtext">Heavy bikes ninja, r3, valentino,bmw n choopers</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/j6xsko3hbg153-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 90,000</h5>
                <p className="cardtext">Honda 125 2018 model.</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/qsxsm6r06hhw2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 275,000</h5>
                <p className="cardtext">Hi Speed Infinity freedom...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/9phz3630wa6y2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 430,000</h5>
                <p className="cardtext">Heavy bikes latest model i...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/0cis9dykyjgr1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 430,000</h5>
                <p className="cardtext">Heavy bikes 250cc,300cc,...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/eq1xyk0i7od72-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 126,000</h5>
                <p className="cardtext">honda cg 125 8 month</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/91s9gmmh3wjv-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 400,000</h5>
                <p className="cardtext">Brand new zero heavy bike...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/sacwz4w5rlpf-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 550,000</h5>
                <p className="cardtext">Latest newly launched Eleg...</p>
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
export default Motorcycles;
