import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../containers/Header'
import Footer1 from '../components/footer'


class Houses extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/2i06klppcu9r3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 11,500,000</h5>
                <p>4 Bds - 5 Ba - 5 Marla</p>
                <p className="cardtext">5 marla double story house...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/x3lxzq7wiqs-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 12,500,000</h5>
                <p>5 Bds - 5 Ba - 5 Marla</p>
                <p className="cardtext">Luxury five Marla house in...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/zmrvxpmuneez2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 14,000,000</h5>
                <p>5 Bds - 5 Ba - 8 Marla</p>
                <p className="cardtext">8 Marla New House for Sale</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/b0fvz3fq6d731-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 69,000,000</h5>
                <p>6+ Bds - 6 Ba - 14 Marla</p>
                <p className="cardtext">Luxurious 14Marla Home C...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
            
            
                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/va0kndu62pqw-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 30,000,000</h5>
                <p>6+ Bds - 6 Ba - 8 Marla</p>
                <p className="cardtext">Islamabad G.13 Brand new...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/vwuss4pj4ej91-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,800,000</h5>
                <p>4 Bds - 2 Ba - 4 Marla</p>
                <p className="cardtext">4 Marla House near OFFICE...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/uzxzn66vxis93-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 45,000,000</h5>
                <p>6+ Bds - 6 Ba - 10 Marla</p>
                <p className="cardtext">Islamabad G.13 Brand new...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/n6tdnpt0ztz6-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 39,000,000</h5>
                <p>3 Bds - 3 Ba - 1 Kanal</p>
                <p className="cardtext">1 kanal Semi commercial si.. </p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/emxrej25evo62-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 27,000,000</h5>
                <p>6+ Bds - 6 Ba - 13 Marla</p>
                <p className="cardtext">House Modern Architecture...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/d6qbfuy611sy-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 32,500,000</h5>
                <p>5 Bds - 6 Ba - 150 Sq..</p>
                <p className="cardtext">Full furnished house for sale..</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/q948ka3s589i2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 66,500,000</h5>
                <p>5 Bds - 5 Ba - 520 Squ..</p>
                <p className="cardtext">520 Sqyd Corner Plot At Mo..</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/ybmji23b0tzm2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 175,000,000</h5>
                <p>5 Bds - 5 Ba - 7 Marla</p>
                <p className="cardtext">Bahira town phase 8 rawalpi..</p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/0meqkd33dtb01-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 66,500,000</h5>
                <p>6+ Bds - 5 Ba - 520 Squ...</p>
                <p className="cardtext">520 Sqyd Plot For Sale On In..</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/1fdqv4a0hdx13-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 3,400,000</h5>
                <p>1 Bds - 1 Ba - 2 Marla</p>
                <p className="cardtext">House for sale</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/uspn299ne8ea2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 90,000,000</h5>
                <p>6+ Bds - 7+ Ba - 550 Sq...</p>
                <p className="cardtext">550 Sq. Yd.House Is Availab... </p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="carsCard card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/991c8soclhsw2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 66,500,000</h5>
                <p>5 Bds - 5 Ba - 520 Squa...</p>
                <p className="cardtext">Underpriced 520 Yards Cor... </p>
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
export default Houses;