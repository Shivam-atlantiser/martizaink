import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import banner from '../pages/assets/banner.avif'
import dummy from '../pages/assets/Netflix.png'
import Honest from '../pages/assets/Honest.png'
import Susan from '../pages/assets/Susan.png'
import sixers from '../pages/assets/sixers.png'
import Petco from '../pages/assets/Petco.png'
import nat from '../pages/assets/nat.png'
import SingleProduct from './singleProduct'
import delivery from './assets/delivery.svg'
import gallery1 from './assets/gallery1.jpg'
import gallery2 from './assets/gallery2.jpg'
import gallery3 from './assets/gallery3.jpg'
import gallery4 from './assets/gallery4.jpg'
import gallery5 from './assets/gallery5.jpg'
import gallery6 from './assets/gallery6.jpg'
import gallery7 from './assets/gallery7.jpg'
import gallery8 from './assets/gallery8.jpg'
import gallery9 from './assets/gallery9.jpg'
import gallery10 from './assets/gallery10.jpg'
import gallery11 from './assets/gallery11.jpg'
import gallery12 from './assets/gallery12.jpg'
import gallery13 from './assets/gallery13.jpg'
import logo1 from './assets/logo1.avif'
import logo2 from './assets/logo2.avif'
import logo3 from './assets/logo3.avif'
import logo4 from './assets/logo4.avif'
import industry from './assets/industry.svg'
import pricing from './assets/pricing.svg'
import user from './assets/user.svg'
import nyk from './assets/nyk.svg'
import sixers_img from './assets/sixers_img.svg'
import inc from './assets/inc.svg'
import { Link } from 'react-router-dom';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../pages/styles.css'

function FrontPage() {
  return (
    <>
      <div className='banner-section '>
        <div className='text-image' >
          <div className='text-inner' >
            <div className='text-container'>
              <div className='banner-text'>
                <p className='banner-heading container'>
                  The Leader in Quality<br /> Custom T-Shirts
                </p>
                <p className='desc'>
                  For events, businesses, schools, groups, and nonprofits
                </p>
                <button className='design-button design-button-2'>
                  <Link to={'/design'} className="nav-link">Start Designing</Link>
                </button>
              </div>
              <div className='delivery-speed'>
                <div className='delivery-options'>
                  <p className='delivery-heading'>
                    Free Delivery
                  </p>
                  <p className='delivery-sub-heading'>
                    As soon as Wed Apr 12
                  </p>
                </div>
                <div className='seperator' />
                <div className='delivery-options'>
                  <p className='delivery-heading'>
                    Rush Delivery
                  </p>
                  <p className='delivery-sub-heading'>
                    Guaranteed by Mon Apr 3
                  </p>
                </div>
                <div className='seperator' />
                <div className='delivery-options'>
                  <p className='delivery-heading'>
                    Need it Sooner?
                  </p>
                  <p className='delivery-sub-heading'>
                    Call 1-800-620-1233 or Live Chat
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-image-section'>
            <img className='banner-image' src={banner} alt="banner" />
          </div>
        </div>
        <div className='companies-box'>
          <span className='company-gallery'>
            <p className='company-trust'>Trusted by</p>
            <img className='company-tiles' src={dummy} alt="companies" />
            <img className='company-tiles' src={Honest} alt="companies" />
            <img className='company-tiles' src={Honest} alt="companies" />
            <img className='company-tiles' src={Susan} alt="companies" />
            <img className='company-tiles' src={sixers} alt="companies" />
            <img className='company-tiles' src={Petco} alt="companies" />
            <img className='company-tiles' src={nat} alt="companies" />
          </span>
        </div>
      </div>
      <div className='category-section'>
        <div className='heading-box'>
          <h1 className='category-heading'>Shop Our Top Categories</h1>
          <span className='sub-heading'>Our best selling apparel great for any occasion.</span>
        </div>
        <div className='container categories'>
          <div className='columns-4'>
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
        </div>
        <Link to="" className='design-button product-button'>Shop all products</Link>
      </div>
      <div className='customer-info-section'>
        <div className='heading-box'>
          <h1 className='customer-heading'>Some of Our Happy 500,000+ Customers</h1>
          <span className='sub-heading'>Get inspired from some of our happy customers showing off their custom apparel</span>
        </div>
        <div className='container media-grid'>
          <span className="grid grid-flow-col gap-2">
            <span className="row-span-3 ... col-span-2 ">
              <img className='media-image' src={gallery1} alt='product' />
            </span>
            <span>
              <img className='media-image_3' src={gallery9} alt='product' />
            </span>
            <span className="row-span-2 ">
              <img className='media-image_3' src={gallery2} alt='product' />
            </span>
            <span>
              <img className='media-image_3' src={gallery3} alt='product' />
            </span>
            <span className="row-span-2 ">
              <img className='media-image_3' src={gallery4} alt='product' />
            </span>
            <span>
              <img className='media-image_3' src={gallery5} alt='product' />
            </span>
            <span className="row-span-2 ">
              <img className='media-image_3' src={gallery6} alt='product' />
            </span>
          </span>
          <span className="grid grid-flow-col gap-2 grid-divide">
            <span>
              <img className='media-image_3' src={gallery7} alt='product' />
            </span>
            <span className="row-span-2 ">
              <img className='media-image_3' src={gallery8} alt='product' />
            </span>
            <span>
              <img className='media-image_3' src={gallery9} alt='product' />
            </span>
            <span className="row-span-2 ">
              <img className='media-image_3' src={gallery10} alt='product' />
            </span>
            <span>
              <img className='media-image_3' src={gallery11} alt='product' />
            </span>
            <span className="row-span-2 ">
              <img className='media-image_3' src={gallery12} alt='product' />
            </span>
            <span className="row-span-3 ... col-span-2 ">
              <img className='media-image' src={gallery13} alt='product' />
            </span>
          </span>
        </div>
      </div>
      <div className='info_section'>
        <div className='info-container'>
          <div className='background-1' />
          <div className='info'>
            <h2 className='category-heading'>
              Embroider Your Logo on Hundreds of<br /> Products
            </h2>
            <p className='sub-heading'>
              Any size order. Any deadline. We've got you covered.
            </p>
            <div className='info-buttons'>
              <Link className='design-button sm-button' to="">Shop Polos</Link>
              <Link className='design-button sm-button' to="">Shop Hats</Link>
            </div>
          </div>
          <div className='info-image'>
            <img className='i-image' src={logo1} alt='product' />
          </div>
          <div className='background-2' />
        </div>
      </div>
      <div className='info_section'>
        <div className='info-container'>
          <div className='background-1' />
          <div className='info-image'>
            <img className='i-image' src={logo2} alt='product' />
          </div>
          <div className='info'>
            <h2 className='category-heading'>
              Company Shirts
            </h2>
            <p className='sub-heading'>
              Whether you're working from home or out of the home, we've got you covered with top styles and templates for businesses of all types.
            </p>
            <div className='info-buttons'>
              <Link className='design-button sm-button' to="">Design a company Shirt</Link>
            </div>
          </div>
          <div className='background-2' />
        </div>
      </div>
      <div className='info_section'>
        <div className='info-container'>
          <div className='background-1' />
          <div className='info'>
            <h2 className='category-heading'>
              It's Always Hoodie Season
            </h2>
            <p className='sub-heading'>
              Sweatshirts, Hoodies and Zip-ups (oh my!) - with dozens of styles and colors, designing a custom hoodie or sweatshirt has never been easier!
            </p>
            <div className='info-buttons'>
              <Link className='design-button sm-button' to="">Shop Custom Hoodies</Link>
            </div>
          </div>
          <div className='info-image'>
            <img className='i-image' src={logo3} alt='product' />
          </div>
          <div className='background-2' />
        </div>
      </div>
      <div className='info_section border-rm'>
        <div className='info-container'>
          <div className='background-1' />
          <div className='info'>
            <h2 className='category-heading'>
              Need Help? Chat with a Real Expert
            </h2>
            <p className='sub-heading'>
              Live chat with a Product Specialist or speak one-on-one with our pros by calling (800) 620-1233.
            </p>
            <div className='info-buttons'>
              <Link className='design-button sm-button' to="">Chat now</Link>
            </div>
          </div>
          <div className='info-image'>
            <img className='i-image' src={logo4} alt='product' />
          </div>
          <div className='background-2' />
        </div>
      </div>
      <div className='deserve-section'>
        <div className='inner-deserve-box'>
          <div className='heading-box'>
            <h1 className='category-heading'>Your Brand Deserves the Best</h1>
            <span className='sub-heading'>Why so many choose us for custom apparel.</span>
          </div>
          <div className='deserve-container'>
            <div className='deserve-content'>
              <img className='svg-style' src={delivery} alt='icon' />
              <p className='delivery-title'>FAST RUSH DELIVERY</p>
              <p className='delivery-description'>Rush deliveries are our speciality, and we never take an order unless we are 100% sure that we can guarantee your deadline.</p>
            </div>
            <div className='deserve-content'>
              <img className='svg-style' src={industry} alt='icon' />
              <p className='delivery-title'>BETTER PRICING</p>
              <p className='delivery-description'>With free shipping and competitive pricing, we provide our high-quality products for a price and standard unmatched anywhere.</p>
            </div>
            <div className='deserve-content'>
              <img className='svg-style' src={pricing} alt='icon' />
              <p className='delivery-title'>INDUSTRY LEADING <br />SATISFACTION GUARANTEE</p>
              <p className='delivery-description'>Accuracy, quality and expedience are core to our business and day-to-day operations. We're happy when you're happy.</p>
            </div>
            <div className='deserve-content'>
              <img className='svg-style' src={user} alt='icon' />
              <p className='delivery-title'>DESIGN REVIEW & REPAIR</p>
              <p className='delivery-description'>Our professional in-house designers review and repair every order we receive to ensure each one is printed to perfection.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='customer-section'>
        <div className='heading-box'>
          <p className='customer-title'>Our Customers Love Us</p>
        </div>
        <div className='swiper-container'>
          <Swiper
            className='main-swiper'
            loop={true}
            slidesPerView={3}
            spaceBetween={15}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <div className='slides'>
                <p className="rating">★★★★★</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <p className='slides-description'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <div className='verified-box'>
                  <p className='customer-image' >✔︎</p>
                  <p className='slider-verified'>Verified Review on Yopto</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slides'>
                <p className="rating">★★★★★</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <p className='slides-description'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <div className='verified-box'>
                  <p className='customer-image' >✔︎</p>
                  <p className='slider-verified'>Verified Review on Yopto</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slides'>
                <p className="rating">★★★★★</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <p className='slides-description'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <div className='verified-box'>
                  <p className='customer-image' >✔︎</p>
                  <p className='slider-verified'>Verified Review on Yopto</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slides'>
                <p className="rating">★★★★★</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <p className='slides-description'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <div className='verified-box'>
                  <p className='customer-image' >✔︎</p>
                  <p className='slider-verified'>Verified Review on Yopto</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slides'>
                <p className="rating">★★★★★</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <p className='slides-description'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p className='each-slider-customer'>Lorem Ipsum</p>
                <div className='verified-box'>
                  <p className='customer-image' >✔︎</p>
                  <p className='slider-verified'>Verified Review on Yopto</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='customer-section'>
        <div className='heading-box'>
          <p className='category-heading'>You're in Good Company</p>
          <span className='sub-heading good-company-sub-heading'>With over 500,000 satisfied customers nationwide, no job is too big or too small.</span>
          <div className='good-company-images'>
            <img className='company-tiles-2' src={dummy} alt="companies" />
            <img className='company-tiles-2' src={Honest} alt="companies" />
            <img className='company-tiles-2' src={Susan} alt="companies" />
            <img className='company-tiles-2' src={sixers} alt="companies" />
            <img className='company-tiles-2' src={Petco} alt="companies" />
            <img className='company-tiles-2' src={nat} alt="companies" />
            <img className='company-tiles-2' src={Susan} alt="companies" />
            <img className='company-tiles-2' src={Petco} alt="companies" />
            <img className='company-tiles-2' src={dummy} alt="companies" />
            <img className='company-tiles-2' src={nat} alt="companies" />
            <img className='company-tiles-2' src={sixers} alt="companies" />
            <img className='company-tiles-2' src={Honest} alt="companies" />
          </div>
        </div>
      </div>
      <div className='our-partners'>
        <div className='partner-box'>
          <div className='partners'>
            <img className='partners-images' src={nyk} alt="companies" />
            <p>"Neque porro quisquam est qui dolor sit amet, velit..."</p>
          </div>
        </div>
        <div className='partner-box'>
          <div className='partners'>
            <img className='partners-images' src={sixers_img} alt="companies" />
            <p>"Neque porro quisquam est qui dolor est qui dolor sit amet, velit..."</p>
          </div>
        </div>
        <div className='partner-box border-rm'>
          <div className='partners'>
            <img className='partners-images' src={inc} alt="companies" />
            <p>"Neque porro quisquam est qui dolor sit amet"</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FrontPage