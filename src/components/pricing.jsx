import { Component } from "react";

export default class Pricing extends Component{
  render () {
    return (
        <div className="Pricing" id="Pricing">
          <div className="container">
              <div className="row">
                  <div className="col-12 text-center">
                      <h4 className="light-title wow  fadeInUp">Pricing Plan </h4>
                      <h2 className="secondary-title  wow  fadeInUp">
                        Get awesome Features , Without <br/>
                        extra Charge
                      </h2>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                      <div className="pricing-item  wow slideInUp" data-wow-delay="0ms" data-wow-duration="1300ms">
                        <div className="pricing-header">
                          <h3>20$ <span>/month</span></h3>
                          <h4>Individual Plan</h4>
                          <p className="mb-0">For use two accounts of brecletes</p>
                        </div>
                        <div className="pricing-body">
                          <h5>Plan Feature</h5>
                          <ul>
                            <li>
                              <span>1</span>
                              two users of accounts
                            </li>
                            <li>
                              <span>2</span>
                              24 Support
                            </li>
                            <li>
                              <span>3</span>
                              Parents supervisions
                            </li>
                            <li>
                              <span>4</span>
                              Full Control
                            </li>
                          </ul>
                          <button type="button" className="btn">
                            Start free trail
                          </button>
                        </div>
                    
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="pricing-item active wow slideInUp" data-wow-delay="400ms" data-wow-duration="1300ms">
                      <div className="pricing-header">
                        <h3>20$ <span>/month</span></h3>
                        <h4>Individual Plan</h4>
                        <p className="mb-0">For use two accounts of brecletes</p>
                      </div>
                      <div className="pricing-body">
                        <h5>Plan Feature</h5>
                        <ul>
                          <li>
                            <span>1</span>
                            two users of accounts
                          </li>
                          <li>
                            <span>2</span>
                            24 Support
                          </li>
                          <li>
                            <span>3</span>
                            Parents supervisions
                          </li>
                          <li>
                            <span>4</span>
                            Full Control
                          </li>
                          <li>
                            <span>5</span>
                            Easy Access
                          </li>
                        </ul>
                        <button type="button" className="btn">
                          Start free trail
                        </button>
                      </div>
                  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="pricing-item wow slideInUp" data-wow-delay="800ms" data-wow-duration="1300ms">
                    <div className="pricing-header">
                      <h3>20$ <span>/month</span></h3>
                      <h4>Individual Plan</h4>
                      <p className="mb-0">For use two accounts of brecletes</p>
                    </div>
                    <div className="pricing-body">
                      <h5>Plan Feature</h5>
                      <ul>
                        <li>
                          <span>1</span>
                          two users of accounts
                        </li>
                        <li>
                          <span>2</span>
                          24 Support
                        </li>
                        <li>
                          <span>3</span>
                          Parents supervisions
                        </li>
                        <li>
                          <span>4</span>
                          Full Control
                        </li>
                      </ul>
                      <button type="button" className="btn">
                        Start free trail
                      </button>
                    </div>
                
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
