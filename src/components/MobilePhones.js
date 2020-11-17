import React from 'react'
import firebase from '../config/firebase'
import { Link } from "react-router-dom";
import { upload_img, post } from '../MainPage/AdPosting'
import { connect } from 'react-redux';
import Header from '../containers/Header'
import Footer1 from '../MainPage/footer'
import Footer from '../containers/Footer';
// import { post_ad } from '../store/action/'

class MobilePhones extends React.Component{

    render(){
        // console.log("props===>", this.props)
        return(
            <div>
                {/* <h1>{this.props.name}</h1> */}
            {/* <div className="card" style={{width: '18rem'}}>
            <img src={this.props.img} className="card-img-top" alt="" />
            <div className="card-body">
            <h5 className="card-text">Rs {this.props.price}</h5>
            <p className="card-text">{this.props.title}</p>
            </div>
            </div>     */}
                <Header />
                <div className="container">
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/0bu5der9tqae-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 22,00</h5>
                <p className="cardtext">Infinix available at reasona..</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/1jagtq0hhtx82-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 24,399</h5>
                <p className="cardtext">Tecno CAMON 16 Box pack..</p>
                </div>
                </div>
                </div> 

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/vqxfa28o8ntw1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 24,200</h5>
                <p className="cardtext">GooPhone Xi ProMax Mod..</p>
                </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/qxfch5jo181a3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 18,300</h5>
                <p className="cardtext">Iphone 6 plus</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
                
                
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/l6k4brousmjd1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 49,999</h5>
                <p className="cardtext">Samsung s10 pin doted d..</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/z6nzydezzudu-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 99,999</h5>
                <p className="cardtext">Samsung note 10 plus 12..</p>
                </div>
                </div>
                </div> 
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/70ni10ho4ohy2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 41,999</h5>
                <p className="cardtext">Samsung Galaxy Note 8..</p>
                </div>
                </div>
                </div>
               
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/c5c4xz2jdjsk1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 32,000</h5>
                <p className="cardtext">Oppo A52 new box pack d...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
                
                
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/hazlaamuxzto1-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 62,000</h5>
                <p className="cardtext">Iphone 7+</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/ir0pjgq9kljn3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 12,000</h5>
                <p className="cardtext">Q Mobile Z12 pro.</p>
                </div>
                </div>
                </div> 
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/9pdm3tjhs7be2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 33,000</h5>
                <p className="cardtext">Samsung A50</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/hjwh4avgeqt33-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 55,000</h5>
                <p className="cardtext">Samsung Galaxy Note 8 Bl...</p>
                </div>
                </div>
                </div> 
                </div>
                <br />
                
                
                <div className="row">
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/hy1t2xepbdcc-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 22,000</h5>
                <p className="cardtext">I phone 7 32gb</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/y70oa844mcpm3-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 25,000</h5>
                <p className="cardtext">Oppo a5 2020</p>
                </div>
                </div>
                </div> 
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/0v9ti60t1dgd-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 25,000</h5>
                <p className="cardtext">I Phone 6s</p>
                </div>
                </div>
                </div>
                
                <div className="col-md-3">
                <div className="card">
                <img className="heartImg" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4THIFcuuDSOzKD716qfwTgOcuOjO_8wJP4w&usqp=CAU"} alt="" />
                <img className="cardImg" src={"https://apollo-singapore.akamaized.net/v1/files/4binjs8bfc5o2-PK/image;s=300x600;q=60"} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Rs 35,000</h5>
                <p className="cardtext">iPhone 7 .. 128gb jet black</p>
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


// const mapStateToProps = (state) => ({
//         users: state.users,
        
//     })
//     const mapDispatchToProps = (dispatch) => ({
//      post_ad: () => dispatch(post_ad())
        
//     })
// export default connect(mapStateToProps, mapDispatchToProps)(MobilePhones);
export default (MobilePhones)