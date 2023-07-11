import React from 'react'
import '../css/Style.css'
import human from "../images/human.png"

export default function Testimonial() {
  return (
    <>
    <section>
  <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-9">
            <div id="carousel-1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="border rounded">
                            <div className="row no-gutters">

                            <div className="col-md-7">
                            <div className="bg-white p-2 px-3 testimonials">
                                <p className="text-justify"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                  irure dolor in reprehenderit in voluptate velit esse.&nbsp;<br/>Duis aute irure dolor in reprehenderit.</q><br/></p>
                                <div className="d-flex justify-content-between p-2">
                                    <div className="d-flex flex-column align-items-right">
                                    <img className="rounded-circles" src={human} alt='' height="300"/>
                                    <h5 className='name'>Emily Clark</h5>
                                    <p className='title'>Owner of Creative Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                <div className="col-md-5"><img className="img-fluid profile" src={human} alt='' height="300"/></div>
                            </div>
                        </div>
                    </div>
                   {/* <div className="carousel-item active">
                        <div className="border rounded">
                            <div className="row no-gutters">

                            <div className="col-md-7">
                            <div className="bg-white p-2 px-3 testimonials">
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.&nbsp;<br/>Duis aute irure dolor in reprehenderit.<br/></p>
                                <div className="d-flex justify-content-between stats border p-2">
                                    <div className="d-flex flex-column align-items-right">
                                    <img className="rounded-circles" src={human} alt='' height="300"/>
                                    <h5 className='name'>Emily Clark</h5>
                                    <p className='title'>Owner of Creative Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                <div className="col-md-5"><img className="img-fluid profile" src={human} alt='' height="300"/></div>
                            </div>
                        </div>
  </div>*/}

                   {/* <div className="carousel-item active">
                        <div className="border rounded">
                            <div className="row no-gutters">

                            <div className="col-md-7">
                            <div className="bg-white p-2 px-3 testimonials">
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.&nbsp;<br/>Duis aute irure dolor in reprehenderit.<br/></p>
                                <div className="d-flex justify-content-between stats p-2">
                                    <div className="d-flex flex-column align-items-right">
                                    <img className="rounded-circles" src={human} alt='' height="300"/>
                                    <h5 className='name'>Emily Clark</h5>
                                    <p className='title'>Owner of Creative Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                <div className="col-md-5"><img className="img-fluid profile" src={human} alt='' height="300"/></div>
                            </div>
                        </div>
</div>*/}
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
    </>
  )
}
