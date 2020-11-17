import React from 'react'
import { Link } from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <div>
            <div className="container footer">
            <div className="row fooImg">
            <div className="col-md-5">
            <img src={"https://statics.olx.com.pk/external/base/img/phone-app.webp"} />
            </div>

            <div className="col-md-4 colTryOlx">
            <h2 className="tryOlx">Try the olx app</h2>
            <p className="olxCaption">Buy, sell and find just about anything using the app on your mobile</p>
            </div>

            <div className="col-md-3">
            <p className="fooGetApp">Get Your App Today</p>   
            <Link to="https://play.google.com/store/apps/details?id=com.olx.pk"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq9Tq3Nqu5tlchiAjgOz7FwbzRIr3E4H1xWg&usqp=CAU"} height="40px"width="120px" /></Link>
            <Link to="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpNuf39VGGHSRxiLJNK9jqS0w4XFrLk34Xmg&usqp=CAU"} height="40px"width="120px" /></Link>
            </div>
            </div>

            <div className="row">
            <div className="col-md-3">
            <p className="footerservices">POPULAR CATEGORIES</p>
            <Link className="footerLinks"to="/cars">Cars</Link><br />
            <Link className="footerLinks">Flats for rent</Link><br />
            <Link className="footerLinks">Jobs</Link><br />
            <Link className="footerLinks"to="/mobilephones">Mobile Phones</Link><br />
            </div>

            <div className="col-md-3">
            <p className="footerservices">TRENDING SEARCHES</p>
            <Link className="footerLinks"to="/motorcycles">Bikes</Link><br />
            <Link className="footerLinks">Watches</Link><br />
            <Link className="footerLinks">Books</Link><br />
            <Link className="footerLinks">Dogs</Link><br />
            </div>

            <div className="col-md-2">
            <p className="footerservices">ABOUT US</p>
            <Link className="footerLinks"to="https://www.olx.com.pk/">About OLX Group</Link><br />
            <Link className="footerLinks"to="https://blog.olx.com.pk/">OLX Blog</Link><br />
            <Link className="footerLinks"to="https://help.olx.com.pk/hc/en-us/requests/new?ticket_form_id=29191">Contact Us</Link><br />
            <Link className="footerLinks"to="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website">OLX for Businesses</Link><br />
            </div>

            <div className="col-md-2">
            <p className="footerservices">OLX</p>
            <Link className="footerLinks"to="https://help.olx.com.pk/hc/en-us">Help</Link><br />
            <Link className="footerLinks">Sitemap</Link><br />
            <Link className="footerLinks"to="https://help.olx.com.pk/hc/en-us/categories/360000044302-Legal-Privacy-information">Legal & Privacy information</Link><br />
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
export default Footer;
