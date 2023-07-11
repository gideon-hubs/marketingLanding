import React from 'react'
import '../css/Style.css'
import { Link } from 'react-router-dom'



const CTA = () => {
  return (
    <>
    <div className='cta'>
            <div className='col mb-4 text-center'>
        <h1 className='cta-mini'>Ready to increase <br/> your social media presence</h1>
        <p className='cta-para'>De dis tori na just tori way no get meaning, na just to helep person<br/> way dey waka for text matter. 
        Make you no vex if e no dey flow well well. </p>

            <div class="col-md-12 text-center">
            <Link class="btn btn-primary btn-lg Regs" href="#" role="button">get started</Link>
            </div>
    </div>
            
        </div>
       
       
       
    </>
  )
}

export default CTA