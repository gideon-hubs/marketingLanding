import React from 'react'
import '../css/Style.css'
import Rectangle from "../images/Rectangle.svg"
import checks from "../images/checks.svg"

export default function AboutUs() {
  return (
    <>
    <section className='abouts'>
  <div className="col-8 containers">
    <div className="left"></div>
    <div className="right">
      <div className="content">
       <img src={Rectangle} alt=''/>
      </div>
    </div>
  </div>

  <div className='col-6'>
       <h1 className='aboutText'>Take your social <br/> media marketing to <br/> the next level</h1>
       <ul className='aboutTextlist'>
      <li> <img src={checks} alt='' className='iconChecks'/>Leo erat magna feugiat non enim</li>
       <li> <img src={checks} alt='' className='iconChecks'/>Leo erat magna feugiat non enim</li>
       <li> <img src={checks} alt='' className='iconChecks'/>Leo erat magna feugiat non enim</li>
       </ul>
        <p className='aboutTextmini'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
        Quia assumenda dolore reprehenderit ullam blanditiis ex <br/>
        sapiente pariatur tempore incidunt facilis?</p>

        <button type="button" class="btn btn-primary btn-lg  aboutBtn">About Us</button>
  </div>
</section>

    </>
  )
}
