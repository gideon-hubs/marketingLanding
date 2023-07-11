import React from "react";
import '../css/Style.css';
import google from '../images/Google.svg'
import slack from '../images/Slack.svg'
import intercom from '../images/Intercom.svg'
import netflix from '../images/Netflix.svg'
import ipsum from '../images/ipsum.svg'
import logoipsum from '../images/logoipsum.svg'


function Trustedsection() {
    return(
        <>
    <section className="back py-5">
        <hr className="vertical"/>
        <div className="col-6 clients">
        <p className="leads">
        Trusted by over <br/> 10k clients & brands.
        </p>
        <p className="brands">
        Lorem ipsum dolor amet, consectetur adipiscing elit.  <br/> In urna, 
        non nisl tincidunt ut elementum turpis.
        </p>
        </div>

        <div className="col-6 logos">
       
        <div className="col-3 brandlogo">
        <img src={google} alt="" className="individualogo"/>
        <img src={slack} alt="" className="individualogo"/>
        <img src={logoipsum} alt="" className="individualogo"/>
        </div>

        <div className="col-3 brandlogo">
        <img src={netflix} alt="" className="individualogo"/>
        <img src={intercom} alt="" className="individualogo"/>
        <img src={ipsum} alt="" className="individualogo"/>
        </div>

        </div>

    </section>
        </>
    )
}

export default Trustedsection;