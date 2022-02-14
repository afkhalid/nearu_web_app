import { Component } from "react";

export default class Header extends Component{
  render () {
    return (
      <header>
            <div className="app-navbar">
                <div className="container">
                   <div className="row">
                      <div className="col-md-2 col-6">
                         <div className="main-logo">
                            <a href="#"  className="navbar-brand">
                            <img  src="./img/layout/nearU-main-logo.svg" className="img-responsive" alt="nearU-main-logo"/>
                            </a>
                         </div>
                      </div>
                      <div className="col-md-10 col-6">
                   
                         <nav className="navbar navbar-expand-lg navbar-light">
                            
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                              <div className="navbar-nav" id="myDIV">
                                <a className="nav-link active" href="#">Home</a>
                                <a className="nav-link" href="#features">Features</a>
                                <a className="nav-link" href="#aboutUs">About us</a>
                                <a className="nav-link" href="#Pricing">Pricing</a>
                                <a className="nav-link" href="#testmilions">Testmilions</a>
                                <a className="nav-link" href="#ContactUs">Contact us</a>
                             
                              </div>
                            </div>
                          </nav>
                     </div>
                    
                   </div>
                   </div>
             </div>
          </header>
    );
  }
}
