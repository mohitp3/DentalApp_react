import React from 'react'

const Header = () => {
  
    return (
        <header id="header" className="header">
        <div className="header-nav">
          <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
            <div className="container">
              <nav id="menuzord-right" className="menuzord blue no-bg">
                <a
                  className="menuzord-brand pull-left flip mb-15"
                  href="index-mp-layout1.html"
                >
                  <img src="images/logo-wide.png" alt="" />
                </a>
                <ul className="menuzord-menu">
                  <li className="active">
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="" onClick={(e)=>{e.preventDefault();document.querySelector("#about").scrollIntoView({behavior: "smooth"});}}>Appointment</a>
                  </li>
                  <li>
                    <a href="" onClick={(e)=>{e.preventDefault();document.querySelector("#services").scrollIntoView({behavior: "smooth"});}}> Our services</a>
                  </li>
                  <li>
                    <a href="" onClick={(e)=>{e.preventDefault();document.querySelector("#clinicInfo").scrollIntoView({behavior: "smooth"});}}>Clinic Info</a>
                  </li>
                  <li>
                    <a href="" onClick={(e)=>{e.preventDefault();document.querySelector("#gallery").scrollIntoView({behavior: "smooth"});}}>Gallery</a>
                  </li>
                  <li>
                    <a href="" onClick={(e)=>{e.preventDefault();document.querySelector("#blog").scrollIntoView({behavior: "smooth"});}}> Blogs</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    
    )
}

export default Header
