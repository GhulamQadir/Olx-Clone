import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../containers/Header'
import Footer1 from '../components/footer'


class Tablets extends React.Component{
    render(){
        return(
            <div>                
            <Header />
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/hl4xwqxim7r4-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 9,999</h5>
                <p className="cardtext">2/16gb Mione M-701 tabl...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/9k7p6q1moi3u-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 13,999</h5>
                <p className="cardtext">Lenovo Tab 4 PUBG Game...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/4yufdc012eae2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 11,999</h5>
                <p className="cardtext">ZTE TREK HD 2 BRand ne...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/jbp44bd5ny25-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 14,499</h5>
                <p className="cardtext">Asus Zenpad tablet - Late...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/0szv72r5xll63-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 35,000</h5>
                <p className="cardtext">Teb 2 64gb/</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/en011fmp13wl1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 20,000</h5>
                <p className="cardtext">From saudi arabia to Pak J...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/a3cysmxoa6gn1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,000</h5>
                <p className="cardtext">Tablets</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/ic9p53j4woq51-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 12,000</h5>
                <p className="cardtext">Sony z3 tablet 3gb.32</p>
                </div>
                </div>
                </div> 
                </div>


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/lomwcc50tsdn3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 12,500</h5>
                <p className="cardtext">Ipad 2 GSM+Wifi Available...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/lcogmma9dedz-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 32,500</h5>
                <p className="cardtext">GALAXY TAB A 10.1 (2019)...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/lh3lce6sno6e1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 12,499</h5>
                <p className="cardtext">Gaming LG Qua Tab 2GB...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/v3k6sfls1p1d1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 10,799</h5>
                <p className="cardtext">samsung Galaxy Tab 4 wit...</p>
                </div>
                </div>
                </div> 
                </div>


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/quhvnf14kyhm2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 168,000</h5>
                <p className="cardtext">iPad MacBook Air, 13", 20...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/su65ry99jkap2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 21,999</h5>
                <p className="cardtext">Blessed Friday. Huawei M...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/u20t0k2smual3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 58,500</h5>
                <p className="cardtext">Ipad air 3 64 gb wifi</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/wdmtsmkup6av3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 20,999</h5>
                <p className="cardtext">Huawei M3 4G LTE (Brand...</p>
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
export default Tablets;
