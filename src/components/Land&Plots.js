import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../containers/Header'
import Footer1 from '../components/footer'


class Plots extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/ob3z86t9qd9e-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 5,500,000</h5>
                <p className="cardtext">9 Marla Residential Plot For...</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/2zivzew07kzx2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 3,150,000</h5>
                <p className="cardtext">Precinct 15 Residential Plot...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/e1d4in80wdof1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 200,000</h5>
                <p className="cardtext">AL NOOR ORCHARD HOUSING SCHEEM</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/psz8t6twdrsk3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 1,600,000</h5>
                <p className="cardtext">2 Marla plot for sale</p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/lcs2ob5x22re-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 6,500,000</h5>
                <p className="cardtext">plot for sale</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/mhqdhd49pnt5-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 14,000,000</h5>
                <p className="cardtext">plot for sale</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/72qwyov78vz01-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 5,500,000</h5>
                <p className="cardtext">plot for sale</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/14jd6ha6ikem1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 3,500,000</h5>
                <p className="cardtext">G block 2867 MAIN DOUBL...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/fj9hg6ktx8501-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 200,000</h5>
                <p className="cardtext">Northtown Resideny</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/9gqh011q0uxp2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 1,300,000</h5>
                <p className="cardtext">5 Marla Non Possession Pl...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/4gb7yfinz4jy1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 5,500,000</h5>
                <p className="cardtext">| Air port Green Garden | Exc...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/fx9odfqqokxm2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 12,000,000</h5>
                <p className="cardtext">30×60 Pair plots Street 4 Bl...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />


                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/x8ktfrgyqpe23-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 4,000,000</h5>
                <p className="cardtext">plot for sale</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/ex2pjh3cnwpc2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 150,000</h5>
                <p className="cardtext">10 marla plot for Sale in Al...</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/r6thws0qnsqk2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 7,500,000</h5>
                <p className="cardtext">10 marla plot for sale in Gul...</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/dduqv0m5myso3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 450,000</h5>
                <p className="cardtext">5 marla Commercial Plot for...</p>
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
export default Plots;
