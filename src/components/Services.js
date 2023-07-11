import React from 'react'
import '../css/Style.css'
import Group1841 from '../images/Group1841.svg'
import Group1842 from '../images/Group1842.svg'
import Group1843 from '../images/Group1843.svg'

export default function Services() {
  return (
    <>
    <section id="home-icons" className="py-5">
        <div className="container">
            <div className="col mb-4 text-center">
                <h3 className="work">What we provide</h3>
                <p className="works">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quia assumenda dolore reprehenderit  <br/> ullam blanditiis ex 
                sapiente pariatur tempore. <br/></p>
            </div>

        <section id="services" className="py-5">
        <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={Group1843} alt=''/>
          <div className="card-body">
            <h5 className="card-title">Social <br/> advertising</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
            This content is a little bit longer.</p>
            <p className="card-texts">Learn More</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={Group1842} alt=''/>
          <div className="card-body">
            <h5 className="card-title">Partnership <br/> Management</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
            This content is a little bit longer.</p>
            <p className="card-texts">Learn More</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={Group1841} alt=''/>
          <div className="card-body">
            <h5 className="card-title">Content <br/> Creations</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
            This content is a little bit longer.</p>
            <p className="card-texts">Learn More</p>
          </div>
        </div>
      </div>
        </section>

           {/* <div className="col-md-12 text-center">
                <a className="btn btn-primary btn-lg Regs" href="#" role="button">Sell Full Guidelines</a>
            </div>*/}
         
        </div>
      </section>
    </>
  )
}
