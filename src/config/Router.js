import React from 'react';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import Login from '../containers/Login';
import Sell from '../containers/Sell';
import MainPage from '../MainPage/index';
import SellPage from '../MainPage/SellPage';
import AdPosting from '../MainPage/AdPosting'
import MobilePhones from '../components/MobilePhones'
import Tablets from '../components/Tablets'
import Cars from '../components/Cars'
import Houses from '../components/Houses'
import Plots from '../components/Land&Plots'
import Motorcycles from '../components/Motorcycles'
import Electronics from '../components/Electronics'
import footer from '../MainPage/footer'
// import MainComponent from '../components/Main-Component';
// import SiteMap from '../components/SiteMap';
// import Categories from '../components/Categories';
// import App from '../App'
import Header from '../containers/Header';
import Footer from '../containers/Footer';
class AppRouter extends React.Component{
    render(){
        return(
        <Router>
            <Route exact path="/login" component={Sell} /> 
            <Route exact path="/sell" component={Sell} /> 
            <Route exact path="/" component={Header} /> 
            <Route exact path="/" component={Footer} /> 
            <Route exact path="/mainpage" component={MainPage} /> 
            <Route exact path="/sellpage" component={SellPage} /> 
            <Route exact path="/post/attributes" component={AdPosting} /> 
            <Route exact path="/mobilephones" component={MobilePhones} /> 
            <Route exact path="/tv-video-audio" component={Electronics} /> 
            <Route exact path="/motorcycles" component={Motorcycles} /> 
            <Route exact path="/plots" component={Plots} /> 
            <Route exact path="/houses" component={Houses} /> 
            <Route exact path="/cars" component={Cars} /> 
            <Route exact path="/tablets" component={Tablets} /> 
            <Route exact path="/mainpage" component={footer} /> 



        </Router>
        )
    }
}
export default AppRouter;