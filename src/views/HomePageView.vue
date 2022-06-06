<template>



<nav class="navbar main-nav navbar-expand-lg large">
  <div class="container">
        <router-link class="navbar-brand mt-3 mb-3" to="/">
          <img src="@/assets/images/logo.png" alt="logo">
        </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="ti-menu"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Ride</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">Drive</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">Fleet</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/">Cities</router-link>
            </li>
            <li class="nav-item">
                <a href="#sign-up" class="nav-link">Sign Up</a>
            </li>
            <li class="nav-item">
                <a href="#download" class="nav-link">Download</a>
            </li>
        </ul>
      </div>
  </div>
</nav>
<!--=====================================
=            Homepage Banner            =
======================================-->

<section class="banner bg-1" id="home">
	<div class="container">
		<div class="row">
			<div class="col-md-6 align-self-center">
			</div>
			<div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h1 class="fw-bold m-5" style="font-size: 50px; font-family: Karla;">The smartest, affordable way to ride</h1>
                                </div>
                                <div class="col-12">
                                    <span class="ms-5 me-5">Download the {{ appName }} app</span>
                                </div>
                                <div class="col-12">
                                    <div class="mt-2 ms-5 mb-5">
                                        <a href="#" class="me-3">
                                            <img style="height: 40px;" src="@/assets/images/appstore.svg" alt="Download Bolt app in App Store">
                                        </a>
                                        <a href="#" class="me-3">
                                            <img style="height: 60px;" src="@/assets/images/googleplay.svg" alt="Download Bolt app in Google Play">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</section>

<!--====  End of Homepage Banner  ====-->

<!--===========================
=      See How to Drive       =
============================-->


<section class="section promo-video bg-3 overlay">
	<div class="container" style="position: relative; ">
		<div class="row">
			<div class="col-12">
                <h1 class="text-white fw-bold title-shadow" style="font-size: 30px;">Drive and Make Money</h1>
                <p class="text-white" style="font-size: 20px; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);">Earn some good money driving, set your own schedule, be your own boss</p>
                <a href="#" class="btn btn-dark" style="position: relative;">See how</a>
			</div>
		</div>
	</div>
</section>

<!--==============================
=            Features            =
===============================-->

<section class="section feature">
	<div class="container">
		<div class="row text-center">
			<div class="col-4">
				<div class="p-2">
                    <h3><i class="fa-solid fa-car text-customized"></i></h3>
					<h3 class="fw-bold">Easy and Affordable</h3>
					<p>Riding with {{ appName }} is easy, affordable and convenient</p>
				</div>
			</div>
			<div class="col-4">
				<div class="p-2">
                    <h3><i class="fa-solid fa-shield text-customized"></i></h3>
					<h3 class="fw-bold">Our Commitment to your Safety</h3>
					<p>Safety features put in place to help create a safe evironment for our riders and drivers alike</p>
				</div>
			</div>
			<div class="col-4">
				<div class="p-2">
                    <h3><i class="fa-solid fa-headset text-customized"></i></h3>
					<h3 class="fw-bold">First Class Support</h3>
					<p>Always there to give support when you need it</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!--====  End of Features  ====-->

<!--=============================================
=            Call to Action Download            =
==============================================-->

<section class="cta-download overlay-2 bg-faint">
	<div class="container" style="position: relative;">
		<div class="row">
			<div class="col-6">
				<div class="content-block">
                    <h1 class="fw-bold" style="font-size: 50px;">Get a ride in Minutes</h1>
                    <p class="lh-base" style="color: #444; font-size: 25px;">Pick your destination, request a ride, meet your driver and enjoy the journey.</p>
				</div>
			</div>
			<div class="col-6 text-center">
                <div style="position: absolute; margin-top: -280px;">
                    <img class="phone-thumb img-fluid" src="@/assets/images/phones/index-phone.webp" alt="">
                </div>
			</div>
		</div>
	</div>
</section>

<!--===========================
=            About            =
============================-->

<section class="about section bg-2" id="about">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-10 m-md-auto align-self-center ml-auto">
				<div class="about-block">
					<!-- About 01 -->
					<div class="about-item">
						<div class="icon">
							<i class="fa-solid fa-car-side"></i>
						</div>
						<div class="content">
							<h5>Available Rides Always</h5>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur sint officiis hic dolor accusantium iure impedit totam ducimus accusamus veritatis!</p>
						</div>
					</div>
					<!-- About 02 -->
					<div class="about-item active">
						<div class="icon">
							<i class="fa-solid fa-wallet"></i>
						</div>
						<div class="content">
							<h5>Affordable Prices</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident possimus nostrum iste earum. Totam nobis voluptates repudiandae harum tempora?</p>
						</div>
					</div>
					<!-- About 03 -->
					<div class="about-item">
						<div class="icon">
							<i class="fa-solid fa-mobile-screen-button"></i>
						</div>
						<div class="content">
							<h5>Easy to use</h5>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil exercitationem sequi id cupiditate consequatur dolore vitae placeat tenetur voluptatibus nisi!</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 align-self-center text-center">
				<!-- Image Content -->
				<div class="image-block">
					<img class="phone-thumb-md img-fluid" src="@/assets/images/phones/iphone-feature.png" alt="iphone-feature">
				</div>
			</div>
		</div>
	</div>
</section>

<!--====  End of About  ====-->

<!--=============================================
=            Call to Action Download            =
==============================================-->

<section class="cta-download bg-4 overlay" id="download">
	<div class="container" style="position: relative;">
		<div class="row">
			<div class="col-lg-5 text-center">
				<div class="image-block">
					<img class="phone-thumb img-fluid" src="@/assets/images/phones/iphone-chat.png" alt="">
				</div>
			</div>
			<div class="col-lg-7">
				<div class="content-block">
					<!-- Title -->
					<h1 class="text-white fw-bold" style="font-size: 45px; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.75);">Free Download Now</h1>
					<!-- Desctcription -->
					<p>Demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee idea of
						denouncing pleasure and praising</p>
					<!-- App Badge -->
					<div class="app-badge">
						<ul class="list-inline">
							<li class="list-inline-item">
								<a href="#" class="btn btn-download"><i class="ti-android"></i>
									<div>Get it on the<span>GOOGLE PLAY</span></div>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="#" class="btn btn-download"><i class="ti-apple"></i>
									<div>Available on the<span>Apple store</span></div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!--====  End of Call to Action Download  ====-->

<!--=============================
=            Counter            =
==============================-->

<section class="section counter bg-gray" id="sign-up">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<a href="#" class="btn btn-sign-up m-5 d-flex">
					<i class="fa-solid fa-car fs-2 flex-fill"></i>
					<div class="flex-fill h2">Sign Up to Drive</div>
					<i class="fa-solid fa-arrow-right fs-2 flex-fill text-end"></i>
				</a>
			</div>
			<div class="col-md-6">
				<a href="#" class="btn btn-sign-up m-5 d-flex">
					<i class="fa-solid fa-map-location-dot fs-2 flex-fill"></i>
					<div class="flex-fill h2">Sign Up to Ride</div>
					<i class="fa-solid fa-arrow-right fs-2 flex-fill text-end"></i>
				</a>
			</div>
		</div>
	</div>
</section>

<!--====  End of Counter  ====-->

<!--============================
=            Footer            =
=============================-->

<footer class="footer-main" id="footer">
	<div class="container">
		<div class="row">
			<div class="col-6">
				<div class="row">
					<div class="col">
						<router-link class="navbar-brand mt-3 mb-3" to="/">
							<img src="@/assets/images/logo.png" alt="logo" style="background: #fff; padding: 20px;">
						</router-link>
					</div>
				</div>
				<div class="row">
					<div class="col-12 other-links mt-4">
						Driver
					</div>
					<div class="col-12">
						<div class="mb-2">
							<a href="#" class="me-3">
								<img style="height: 40px;" src="@/assets/images/appstore.svg" alt="Download Bolt app in App Store">
							</a>
							<a href="#" class="me-3">
								<img style="height: 60px;" src="@/assets/images/googleplay.svg" alt="Download Bolt app in Google Play">
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 other-links mt-4">
						Rider
					</div>
					<div class="col-12">
						<div class="mb-5">
							<a href="#" class="me-3">
								<img style="height: 40px;" src="@/assets/images/appstore.svg" alt="Download Bolt app in App Store">
							</a>
							<a href="#" class="me-3">
								<img style="height: 60px;" src="@/assets/images/googleplay.svg" alt="Download Bolt app in Google Play">
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="row">
					<div class="col">
						<h4 class="text-white fw-bold title-shadow">Our Products</h4>
						<ul>
							<li></li>
						</ul>
					</div>
					<div class="col">
						<h4 class="text-white fw-bold title-shadow">Help and Support</h4>
					</div>
					<div class="col">
						<h4 class="text-white fw-bold title-shadow">About</h4>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-6 text-white other-links">
				&copy; {{ appName }}. All rights Reserved
			</div>
			<div class="col-6 text-lg-right">
				<!-- Social Icons -->
				<ul class="social-icons">
					<li class="list-inline-item">
						<a target="_blank" href="">
							<i class="ti-facebook"></i>
						</a>
					</li>
					<li class="list-inline-item">
						<a target="_blank" href="">
							<i class="ti-twitter-alt"></i>
						</a>
					</li>
					<li class="list-inline-item">
						<a target="_blank" href="#">
							<i class="ti-linkedin"></i>
						</a>
					</li>
					<li class="list-inline-item">
						<a target="_blank" href="#">
							<i class="ti-instagram"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
</template>

<script>
export default {    
  name: "WebsiteView",
  data: function(){
      return {
          appName: 'TramSL'
      };
  },
  components: {
  }
}
</script>