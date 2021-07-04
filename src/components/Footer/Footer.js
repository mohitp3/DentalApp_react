import React from 'react'
import NewsletterSubscription from './NewsletterSubscription'

const Footer = () => {
    return (
        <footer id="footer" className="footer bg-black-111">
		<div className="container pt-70 pb-40">
			<div className="row border-bottom-black">
				<div className="col-sm-6 col-md-3">
					<div className="widget dark">
						<img className="mt-10 mb-20" alt="" src="images/logo-wide-white.png"/>
						<p>Lorem ipsum dolor adipisicing amet, consectetur sit elit. Aspernatur incidihil quo officia.</p>
						<ul className="list-inline mt-5">
							<li className="m-0 pl-10 pr-10"> <i className="fa fa-map-marker text-theme-colored mr-5"></i> <a className="text-gray" href="#">203, Envato Labs, Behind Alis Steet, Melbourne, Australia</a> </li>
							<li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-theme-colored mr-5"></i> <a className="text-gray" href="#">123-456-789</a> </li>
							<li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-theme-colored mr-5"></i> <a className="text-gray" href="#">contact@yourdomain.com</a> </li>
							<li className="m-0 pl-10 pr-10"> <i className="fa fa-globe text-theme-colored mr-5"></i> <a className="text-gray" href="#">www.yourdomain.com</a> </li>
						</ul>
					</div>
					<div className="widget dark">
						<h5 className="widget-title mb-10">Connect With Us</h5>
						<ul className="styled-icons icon-dark icon-circled icon-sm">
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-skype"></i></a></li>
							<li><a href="#"><i className="fa fa-youtube"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-md-3">
					<div className="widget dark">
						<h5 className="widget-title line-bottom">Useful Links</h5>
						<ul className="list-border">
							<li><a href="index-mp-layout1.html">Home</a></li>
							<li><a href="page-about1.html">About us</a></li>
							<li><a href="page-contact1.html">Contact</a></li>
						</ul>
					</div>
					<div className="widget dark">
						<h5 className="widget-title line-bottom">Other Links</h5>
						<ul className="list-border">
							<li><a href="shortcode-sitemap.html">FAQ</a></li>
							<li><a href="shortcode-sitemap.html">Sitemap</a></li>
							<li><a href="page-contact1.html">Policy</a></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-md-3">
					<div className="widget dark">
						<h5 className="widget-title line-bottom">Latest News</h5>
						<div className="latest-posts">
							<article className="post media-post clearfix pb-0 mb-10">
								<a href="blog-single-right-sidebar.html" className="post-thumb"><img alt="" src="http://placehold.it/80x55"/></a>
								<div className="post-right">
									<h5 className="post-title mt-0 mb-5"><a href="blog-single-right-sidebar.html">Sustainable Construction</a></h5>
									<p className="post-date mb-0 font-12">Mar 08, 2015</p>
								</div>
							</article>
							<article className="post media-post clearfix pb-0 mb-10">
								<a href="blog-single-right-sidebar.html" className="post-thumb"><img alt="" src="http://placehold.it/80x55" /></a>
								<div className="post-right">
									<h5 className="post-title mt-0 mb-5"><a href="blog-single-right-sidebar.html">Industrial Coatings</a></h5>
									<p className="post-date mb-0 font-12">Mar 08, 2015</p>
								</div>
							</article>
							<article className="post media-post clearfix pb-0 mb-10">
								<a href="blog-single-right-sidebar.html" className="post-thumb"><img alt="" src="http://placehold.it/80x55"/></a>
								<div className="post-right">
									<h5 className="post-title mt-0 mb-5"><a href="blog-single-right-sidebar.html">Storefront Installations</a></h5>
									<p className="post-date mb-0 font-12">Mar 08, 2015</p>
								</div>
							</article>
						</div>
					</div>
					<div className="widget dark">
						<h5 className="widget-title line-bottom">Call Us Now</h5>
						<div className="text-gray">
							+61 3 1234 5678
							+12 3 1234 5678
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-3">
					<div className="widget dark">
						<h5 className="widget-title line-bottom">Opening Hours</h5>
						<div className="opening-hours">
							<ul className="list-border">
								<li className="clearfix"> <span> Mon - Tues :  </span>
									<div className="value pull-right flip"> 6.00 am - 10.00 pm </div>
								</li>
								<li className="clearfix text-white"> <span> Wednes - Thurs :</span>
									<div className="value pull-right flip"> 8.00 am - 6.00 pm </div>
								</li>
								<li className="clearfix"> <span> Fri : </span>
									<div className="value pull-right flip"> 3.00 pm - 8.00 pm </div>
								</li>
								<li className="clearfix"> <span> Sun : </span>
									<div className="value pull-right flip"> Closed </div>
								</li>
								<li className="clearfix"> <span> Sat : </span>
									<div className="value pull-right flip"> 10.00 am - 2.00 pm </div>
								</li>
							</ul>
						</div>
					</div>
					<div className="widget dark">
						<h5 className="widget-title line-bottom">Subscribe Us</h5>
						<NewsletterSubscription/>
						{/* <script>
							$('#mailchimp-subscription-form-footer').ajaxChimp({
									callback: mailChimpCallBack,
									url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
							});

							function mailChimpCallBack(resp) {
									// Hide any previous response text
									var $mailchimpform = $('#mailchimp-subscription-form-footer'),
											$response = '';
									$mailchimpform.children(".alert").remove();
									if (resp.result === 'success') {
											$response = '<div className="alert alert-success"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
									} else if (resp.result === 'error') {
											$response = '<div className="alert alert-danger"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
									}
									$mailchimpform.prepend($response);
							}
						</script> */}
					</div>
				</div>
			</div>
		</div>
		<div className="footer-bottom bg-black-222">
			<div className="container pt-10 pb-0">
				<div className="row">
					<div className="col-md-6 sm-text-center">
						<p className="font-13 text-black-777 m-0">Copyright ©2017 ThemeMascot. All Rights Reserved</p>
					</div>
					<div className="col-md-6 text-right flip sm-text-center">
						<div className="widget no-border m-0">
							<ul className="styled-icons icon-dark icon-circled icon-sm">
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-skype"></i></a></li>
								<li><a href="#"><i className="fa fa-youtube"></i></a></li>
								<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    )
}

export default Footer
