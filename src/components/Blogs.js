import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Style.css'
import blog from '../images/RecBlog.png'
import Bloggs from '../images/RectanBlog.png'

function Blogs() {
  return (
    <>
<div class="container">
  <div class="row blog-section">
    <div class="col">
      <h1 className='blog-heading'>Read our blogs</h1>
      <p className='blog-para'>No be say na how we dey yan for real life o, 
      na just for this one way I wan <br/> show you so e go 
      helep your eye catch wetin you wan see.</p>
    </div>
    <div class="col">
    <div class="col-md-12 text-center">
    <Link class="btn btn-primary btn-lg blog-boton" href="#" role="button">read all blogs</Link>
    </div>
    </div>
  </div>

  <div className="card-deck blog-decks">
  <div class="card" style={{width:"60px"}}>
  <img class="card-img" src={blog} alt=""/>
  <div class="card-body blog-card">
  <p class="card-text smalls"><small>July 1, 2023</small></p>
    <h5 class="card-title blog-card-title">How to collaborate with companies</h5>
    <p class="card-text blog-card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text blog-card-small">Read More</p>
  </div>
</div>

  <div class="card" style={{width:"10px"}}>
  <img class="card-img blog-card-images" src={Bloggs} alt=""/>
  <div class="card-body blog-card">
  <p class="card-text smalls"><small>July 1, 2023</small></p>
    <h5 class="card-title blog-card-title">About social media advertising</h5>
    <p class="card-text blog-card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text blog-card-small">Read More</p>
  </div>
</div>

</div>
</div>
    
    </>
  )
}

export default Blogs