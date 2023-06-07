import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return <nav className=' p-2 flex-md-row flex-column d-flex justify-content-between'>
<div className="left-nav flex-md-row flex-column d-flex align-items-center">
<h1 className=' m-0 pe-3'>Noke</h1>
<ul className=' list-unstyled flex-md-row flex-column d-flex m-0 align-items-center'>
  <li className=' px-2'><Link  to=''>Home</Link></li>
  <li className=' px-2'><Link  to='movie'>Movie</Link></li>
  <li className=' px-2'><Link  to='tv'>Tv</Link></li>
  <li className=' px-2'><Link  to='people'>People</Link></li>
</ul>
</div>
<div className="right-nav flex-md-row flex-column d-flex align-items-center">
  <div className="social-media">
    <i className=' fab mx-1 fa-facebook'></i>
    <i className=' fab mx-1 fa-google'></i>
    <i className=' fab mx-1 fa-twitter'></i>
    <i className=' fab mx-1 fa-spotify'></i>
    <i className=' fab mx-1 fa-youtube'></i>
  </div>

  <ul className=' list-unstyled flex-md-row flex-column d-flex m-0 align-items-center'>
  
    
    <li className=' px-2'><Link  to='login'>Login</Link></li>
    <li className=' px-2'><Link  to='register'>Register</Link></li>
  
  </ul>
</div>
  </nav>
  
}









  /*<div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 p-3  mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about"></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="parent">Parent</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="contact">Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  </nav>
}*/



