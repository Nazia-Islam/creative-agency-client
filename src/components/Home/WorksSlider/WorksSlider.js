import React from 'react';

const WorksSlider = () => {
    return (
        <div className="mb-5 pt-5" style={{backgroundColor:"#111430"}}>
           <h2 className="text-white text-center mb-5">Here are some of <span className="text-green">our works</span></h2>
            <div className="container">
                <div className="row blog">
                    <div className="col-md-12">
                        <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#blogCarousel" data-slide-to="1"></li>
                            </ol>
                            <div class="carousel-inner mb-5">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src={require("../../../images/carousel-1.png")} alt="Image" style={{maxWidth:"100%", marginBottom:"10px"}}/>
                                        </div>
                                        <div class="col-md-4 col-">
                                            <img src={require("../../../images/carousel-2.png")} alt="Image" style={{maxWidth:"100%", marginBottom:"10px"}}/>                  
                                        </div>
                                        <div class="col-md-4">
                                            <img src={require("../../../images/carousel-4.png")} alt="Image" style={{maxWidth:"100%", marginBottom:"10px"}}/>
                                        </div>
                                    </div> 
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src={require("../../../images/carousel-1.png")} alt="Image" style={{maxWidth:"100%", marginBottom:"10px"}}/>
                                        </div>
                                        <div class="col-md-4 col-">
                                            <img src={require("../../../images/carousel-5.png")} alt="Image" style={{maxWidth:"100%", marginBottom:"10px"}}/>                  
                                        </div>
                                        <div class="col-md-4">
                                            <img src={require("../../../images/carousel-2.png")} alt="Image" style={{maxWidth:"100%", marginBottom:"10px"}}/>
                                        </div>
                                    </div> 
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksSlider;