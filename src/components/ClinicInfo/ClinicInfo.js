import React from 'react'

const ClinicInfo = () => {
    return (
        <section className="divider parallax layer-overlay overlay-white-8" data-bg-img="images/bg/bg5.jpg" style={{backgroundImage:"url(images/bg/bg5.jpg)", backgroundPosition:"center"}}>
  			<div className="container pb-50">
  				<div className="section-content">
  					<div className="row">
  						<div className="col-xs-12 col-sm-6 col-md-3 mb-50">
  							<div className="funfact text-center">
  								<i className="flaticon-medical-male100 text-theme-colored"></i>
  								<h2 data-animation-duration="2000" data-value="10" className="animate-number font-38 appeared">10</h2>
  								<h5 className="text-uppercase mb-0">Professional Dentists</h5>
  							</div>
  						</div>
  						<div className="col-xs-12 col-sm-6 col-md-3 mb-50">
  							<div className="funfact text-center">
  								<i className="flaticon-medical-family21 text-theme-colored"></i>
  								<h2 data-animation-duration="2000" data-value="2480" className="animate-number font-38 appeared">2,480</h2>
  								<h5 className="text-uppercase mb-0">Setisfied Patient</h5>
  							</div>
  						</div>
  						<div className="col-xs-12 col-sm-6 col-md-3 mb-50">
  							<div className="funfact text-center">
  								<i className="flaticon-medical-hospital17 text-theme-colored"></i>
  								<h2 data-animation-duration="2000" data-value="40" className="animate-number font-38 appeared">40</h2>
  								<h5 className="text-uppercase mb-0">Hospital Rooms</h5>
  							</div>
  						</div>
              <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
  							<div className="funfact text-center">
  								<i className="flaticon-medical-hospital36 text-theme-colored"></i>
  								<h2 data-animation-duration="2000" data-value="20" className="animate-number font-38 appeared">20</h2>
  								<h5 className="text-uppercase mb-0">Our Machines</h5>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  	</section>
    )
}

export default ClinicInfo
