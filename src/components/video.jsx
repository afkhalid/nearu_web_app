import { Component } from "react";

export default class Pricing extends Component{
  render () {
    return (
        <div className="video">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="video-img">
                            <img src="./img/layout/video-section-img.png" alt="vide-img" className="video-img"/>
                            <span>
                              <button type="button" className="btn  video-btn" data-toggle="modal"
                              data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal">
                              <img src="./img/icons/video-icon.svg" alt="video-icon"/>

                            </button>
                            
                            </span>
                          
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
