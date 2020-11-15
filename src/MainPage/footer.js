import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



class Footer extends React.Component{
    render(){
        return(
            <div>
            <div className="container">
            <center><button className="loadmore">Load more</button></center>
            </div>

            <div className="container footer">
            <div className="row">
            <div className="col-md-3">
            <p className="footerservices">POPULAR CATEGORIES</p>
            <Link className="footerLinks">Cars</Link><br />
            <Link className="footerLinks">Flats for rent</Link><br />
            <Link className="footerLinks">Jobs</Link><br />
            <Link className="footerLinks">Mobile Phones</Link><br />
            </div>

            <div className="col-md-3">
            <p className="footerservices">TRENDING SEARCHES</p>
            <Link className="footerLinks">Bikes</Link><br />
            <Link className="footerLinks">Watches</Link><br />
            <Link className="footerLinks">Books</Link><br />
            <Link className="footerLinks">Dogs</Link><br />
            </div>

            <div className="col-md-2">
            <p className="footerservices">ABOUT US</p>
            <Link className="footerLinks">About OLX Group</Link><br />
            <Link className="footerLinks">OLX Blog</Link><br />
            <Link className="footerLinks">Contact Us</Link><br />
            <Link className="footerLinks">OLX for Businesses</Link><br />
            </div>

            <div className="col-md-2">
            <p className="footerservices">OLX</p>
            <Link className="footerLinks">Help</Link><br />
            <Link className="footerLinks">Sitemap</Link><br />
            <Link className="footerLinks">Legal & Privacy information</Link><br />
            </div>
            
            <div className="col-md-2">
            <p className="footerservices">Follow us</p>
            <Link className="footerLinks"to="https://www.facebook.com/olxpakistan"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
            <Link className="footerLinks"to="https://twitter.com/OLX_Pakistan"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
            <Link className="footerLinks"to="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
            <Link className="footerLinks"to="https://www.instagram.com/olx.pakistan/"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
            <br />
            <br />
            <Link to="https://play.google.com/store/apps/details?id=com.olx.pk"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq9Tq3Nqu5tlchiAjgOz7FwbzRIr3E4H1xWg&usqp=CAU"} height="27px"width="90px" /></Link>
            <Link to="https://apps.apple.com/app/olx-pakistan/id1119081665"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpNuf39VGGHSRxiLJNK9jqS0w4XFrLk34Xmg&usqp=CAU"} height="30px"width="90px" /></Link>
            </div>
            </div>
        
            <div className="row footer1">
            <div className="col-md-7">
            <p>Other Countries India - South Africa - Indonesia</p>
            </div>
 
            <div className="col-md-5">
            <p>Free Classifieds in Pakistan. © 2006-2020 OLX</p>

            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Footer