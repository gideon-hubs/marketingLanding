import React from "react";
import '../css/Style.css';
import image1 from "../images/image1.svg"
import image2 from "../images/image2.svg"
import icon2 from "../images/icon2.svg"
import icon1 from "../images/icon1.svg"


function Hero(params) {
    return(
        <>
        <section>
        <div className="jumbotron jumbotron-fluid bgJumb">
            <div className="container">
                <div className="row">
                    <div className="col-6 sm-md-lg m-auto">
                        <h1 className="display-4">Increase your <br/> performance on <br/> social media </h1>
                        <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. In urna, 
                        non nisl tincidunt ut elementum turpis.
                        </p>
                        <a className="btn btn-primary btn-lg regs" href="#" role="button">Get Started</a>
                        <img src={icon2} alt="" className="icons"/>
                        <img src={icon1} alt="" className="icons1"/>
                    </div>
                    <div className="col-6" >
                        <img src={image1} alt="" className="img-fluids"/>
                        <img src={image2} alt="" className="img-fluids"/>
                    </div>
                </div>
               
            </div>
          </div>
      </section>
        </>
    )
}

export default Hero;