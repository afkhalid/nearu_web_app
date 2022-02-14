import { Component } from "react";

export default class Services extends Component{
  render () {
    return (
    <div className="services" id="aboutUs">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h4 className="light-title wow  fadeInUp">About</h4>
          
            </div>
            <div className="col-md-6 col-12">
              <h2 className="secondary-title  wow  fadeInUp">
                What We Can Present <br/>
                to you
            </h2>
                <div className="accordion" id="accordionExample">
                    <div className="card  wow slideInUp" data-wow-delay="0ms" data-wow-duration="1300ms">
                      <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span>1</span>
                        <h4 className="mb-0">
                            Our App Feature 
                        </h4>
                      </div>
                  
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            We Have New App Feature you can download itWe Have New App
                            Feature you can download itWe Have New App Feature you can 
                            download itWe Have New App Feature you can download it                                </div>
                      </div>
                    </div>
                    <div className="card wow slideInUp" data-wow-delay="300ms" data-wow-duration="1300ms">
                    
                      <div className="card-header" id="headingTwo" collapsed  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span>2</span>
                        <h4 className="mb-0">
                            Our App Feature 
                        
                        </h4>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            We Have New App Feature you can download itWe Have New App
                            Feature you can download itWe Have New App Feature you can 
                            download itWe Have New App Feature you can download it                                  </div>
                      </div>
                    </div>
                    <div className="card wow slideInUp" data-wow-delay="600ms" data-wow-duration="1300ms">
                      <div className="card-header" id="headingThree"  collapsed data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span>3</span>
                        <h4 className="mb-0">
                            Our App Feature 
                        </h4>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                          And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
           
            <div className="col-md-6 col-12 ml-auto">
              <div className="device-wrapper mx-auto">
                  <div className="text-center wow slideInUp">
                    <img className="img-fluid" src="./img/layout/features-img.png" alt="features-img"/>
                  </div>
           
              </div>
            </div>
        
        </div>
    </div>
    </div>
    );
  }
}
