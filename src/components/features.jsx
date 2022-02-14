import { Component } from "react";

export default class Features extends Component{
  render () {
    return (
        <div className="features" id="features">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h4 className="light-title wow  fadeInUp">Our Features</h4>
                    <h2 className="secondary-title  wow  fadeInUp">
                        What We Can Present <br/>
                        to you
                    </h2>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-center">
                    <div className="feature-item  wow zoomIn" data-wow-delay="0ms" data-wow-duration="1300ms">
                        <img src="./img/icons/online-shopping-icon.svg" alt="online-shopping-icon" className="img-responsive"/>
                        <h5>online Shopping</h5>
                        <p>
                            Get the tag you needed with
                            Low Coast from our store
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-center">
                    <div className="feature-item wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                    
                        <img src="./img/icons/easy-toscan-icon.svg" alt="easy-toscan-icon" className="img-responsive"/>
                        <h5>Easy to Scan</h5>
                        <p>
                            Get the tag you needed with
                            Low Coast from our store
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-center">
                    <div className="feature-item wow zoomIn" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <img src="./img/icons/free-touse-icon.svg" alt="free-toUse-icon" className="img-responsive"/>
                        <h5>Free to use</h5>
                        <p>
                            Get the tag you needed with
                            Low Coast from our store
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-center">
                    <div className="feature-item wow zoomIn" data-wow-delay="900ms" data-wow-duration="1500ms">
                        <img src="./img/icons/online-shopping-icon.svg" alt="online-shopping-icon" className="img-responsive"/>

                        <h5>Free to use</h5>
                        <p>
                            Get the tag you needed with
                            Low Coast from our store
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="first1-circle"></div>
        <div className="first3-circle"></div>
        <div className="first4-circle"></div>
    </div>
    );
  }
}
