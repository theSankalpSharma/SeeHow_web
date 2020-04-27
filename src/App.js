import React, { useState } from "react";
import logo from "./assets/img/Seehow_logo.png";
import "./assets/css/style.css";
import ReactMapGL from "react-map-gl";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';
// import Accordion from "./components/Accordion"

function App() {
  const [viewport, setViewport] = useState({
    latitude: 12.9139,
    longitude: 77.6375,
    width: "80vw",
    height: "50vh",
    zoom: 3,
    
  });
  return (
    <div className="App">
      <body>
        
      <div class="light-header grid">
        <nav class="navbar navbar-expand-lg navbar-dark" id="mainNav">
          
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              <img src={logo} alt="corp logo" />
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu<i class="fa fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#services">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#portfolio">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#portfolio">
                    Sports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#portfolio">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#portfolio">
                    FAQ
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#portfolio">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          </div>

        <section className="masthead">
          <div class="flex-container">
          </div>
        </section>

        <section class="feature-section" id="feature">
        <div class="flex-container text-center">
        <h2 class="section-heading text-uppercase" color="#592c32">Our Features</h2>
          <div class="row">
               
              <div class="col-md-6">
              
                  <img
                    class="w3-display-bottomright w3-display-1"
                    id="features"
                    src={require("./assets/img/app_disp.jpg")}                   
                  />
                </div>
                <div class="col-md-6">
                  <div className="row row-mg">
                  <img
                    class="smartfeature"
                    src={require("./assets/img/no_external_setup_bdw_pattern.png")}                
                  />
                  <img
                    class="smartfeature"
                    src={require("./assets/img/real_time_bdv_pattern.png")}                
                  />
                  </div>
                  <div className="row row-mg">
                  <img
                    class="smartfeature"
                    src={require("./assets/img/profile_history_bdu_pattern.png")}                
                  />
                  <img
                    class="smartfeature"
                    src={require("./assets/img/improve_bdx_pattern.png")}                
                  />
                  </div>
                </div>
            </div>
          </div>
        </section>


        <section class="otherfeat-section" id="otherfeatures">
          <div class="flex-container">
            <div className="row">
              
              <div class="col-md-3">
                <img
                  class="w3-display"
                  src={require("./assets/img/weight_bdl_pattern.png")}
                />
              </div>
              <div class="col-md-3">
                <img
                  class="w3-display"
                  src={require("./assets/img/protection_bdk_pattern.png")}

                />
              </div>
              <div class="col-md-3">
                <img
                  class="w3-display"
                  src={require("./assets/img/connection_bdm_pattern.png")}

                />
              </div>
              <div class="col-md-3">
                <img
                  class="w3-display"
                  src={require("./assets/img/bat_ready_bdn_pattern.png")}
                />
              </div>
            </div>
            <div className="row justify-content-md-center">
            <div >
                <img
                  class="img-thumbnail"
                  id="storeimage1"
                  src={require("./assets/img/play_store.png")}
                />

                <img
                  id="storeimage2"
                  class="img-thumbnail"
                  src={require("./assets/img/app_store.png")}
                />
            </div>
            </div>
          </div>
        </section>

        <section className="slides"> 
          <div>
  
          </div>
        </section>

        
      


            <section class="media-section">
            <div class="flex-container ">
              <div class="text-center">
                <h2 class="section-heading text-uppercase">media</h2>
              </div>
              <div class="" id="media-sectn">
              <Carousel
                  arrowLeft={<Icon name="angle-double-left" />}
                  arrowLeftDisabled={<Icon name="angle-left" />}
                  arrowRight={<Icon name="angle-double-right" />}
                  arrowRightDisabled={<Icon name="angle-right" />}
                  addArrowClickHandler
                  slidesPerPage={5}
                  infinite
                  breakpoints={{
                    640: {
                      slidesPerPage: 1,
                      arrows: false
                    },
                    900: {
                      slidesPerPage: 2,
                      arrows: false
                    }
                  }}
                  autoPlay={2000}
                  animationSpeed={1000}                  
                 
          >
            
              <img class="carouselItems" src={require("./assets/img/techciacle_bdy_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/techinasia_bdp_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/icon_techcrunch_bdr_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/icon_livemint_bdq_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/icon_tie_bds_pattern.png")}  />
              <img class="carouselItems" src={require("./assets/img/Image_46.png")}/>
            
          </Carousel>
              </div>
            </div>
        </section>


        <section class="os-section bg-light" id="portfolio">
        <div class="flex-container">
        <h2 class="section-heading text-uppercase">
            sports operating system
          </h2>
          <div class="row">
            <div class="col-md-6" id="octopussy">
              <img
                class="img-fluid"
                src={require("./assets/img/Mask_Group_99_bdx_pattern.png")}
                height={250}
                width={250}
                id="tv"
              />
            </div>
            <div class="d-flex justify-content-center">
              
              <div class="row">
                <div class="col-sm-6" >
                  <img
                    class="w3-display"
                    src={require("./assets/img/Mask_Group_108_bdt_pattern.png")}
                  />
                  <img
                    class="w3-display"
                    src={require("./assets/img/Mask_Group_107_bdu_pattern.png")}
                  />
                </div>
                </div>
                <div class="row">
                <div class="col-sm-6" >
                  <img
                   class="w3-display"
                    src={require("./assets/img/Mask_Group_110_bdw_pattern.png")}
                  />
                  <img
                    class="w3-display"
                    src={require("./assets/img/Mask_Group_109_bdv_pattern.png")}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section class="partner-section">
            <div class="flex-container ">
              <div class="text-center">
                <h2 class="section-heading text-uppercase">partners</h2>
              </div>
            <div class="" id="partner-sectn">
            <Carousel
                  arrowLeft={<Icon name="angle-double-left" />}
                  arrowLeftDisabled={<Icon name="angle-left" />}
                  arrowRight={<Icon name="angle-double-right" />}
                  arrowRightDisabled={<Icon name="angle-right" />}
                  addArrowClickHandler
                  slidesPerPage={5}
                  infinite
                  breakpoints={{
                    640: {
                      slidesPerPage: 1,
                      arrows: false
                    },
                    900: {
                      slidesPerPage: 2,
                      arrows: false
                    }
                  }}
                  autoPlay={2000}
                  animationSpeed={1000}
                 
          >
              <img class="carouselItems" src={require("./assets/img/cce_bej_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/cricket_beyond_technique_bei_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/gary_kristen_beh_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/Mask_Group_127_bek_pattern.png")} />
              <img class="carouselItems" src={require("./assets/img/icon_tie_bds_pattern.png")}  />
              <img class="carouselItems" src={require("./assets/img/pace_lab.png")}/>
            
          </Carousel>
      </div>
            </div>
        </section>

        <section class="page-section">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <div class="flex-container" id="maps">
                <ReactMapGL
                  {...viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  onViewportChange={(viewport) => {
                    setViewport(viewport);
                  }}
                ></ReactMapGL>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section">
          <div class="flex-container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">FAQ</h2>
           
               
            </div>
          </div>
        </section>

        <button class="accordion">Section 1</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Section 2</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Section 3</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <section class="page-section bg-light" id="team">
     
        </section>

        <section class="py-5">

        </section>

        <section class="page-section" id="contact">
        
        </section>

        <footer class="footer py-4">
          <div class="flex-container">
            <div class="row align-items-center">
              <div class="col-lg-4 text-lg-left">
                Copyright © Your Website 2020
              </div>
              <div class="col-lg-4 my-3 my-lg-0">
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fa fa-twitter"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fa fa-facebook-f"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fa fa-linkedin-in"></i>
                </a>
              </div>
              <div class="col-lg-4 text-lg-right">
                <a class="mr-3" href="#!">
                  Privacy Policy
                </a>
                <a href="#!">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>

       
        

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal3"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal">
                {/* <img src="assets/img/close-icon.svg" /> */}
              </div>
              <div class="flex-container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Project Name</h2>
                      <p class="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      {/* <img
                        class="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/03-full.jpg"
                        alt=""
                      /> */}
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul class="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Finish</li>
                        <li>Category: Identity</li>
                      </ul>
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i class="fa fa-times mr-1"></i>Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal4"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal">
                {/* <img src="assets/img/close-icon.svg" /> */}
              </div>
              <div class="flex-container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Project Name</h2>
                      <p class="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      {/* <img
                        class="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/04-full.jpg"
                        alt=""
                      /> */}
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul class="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Lines</li>
                        <li>Category: Branding</li>
                      </ul>
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i class="fa fa-times mr-1"></i>Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal5"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal">
                {/* <img src="assets/img/close-icon.svg" /> */}
              </div>
              <div class="flex-container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Project Name</h2>
                      <p class="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      {/* <img
                        class="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/05-full.jpg"
                        alt=""
                      /> */}
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul class="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Southwest</li>
                        <li>Category: Website Design</li>
                      </ul>
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i class="fa fa-times mr-1"></i>Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal6"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal">
                {/* <img src="assets/img/close-icon.svg" /> */}
              </div>
              <div class="flex-container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="text-uppercase">Project Name</h2>
                      <p class="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      {/* <img
                        class="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/06-full.jpg"
                        alt=""
                      /> */}
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul class="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Window</li>
                        <li>Category: Photography</li>
                      </ul>
                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i class="fa fa-times mr-1"></i>Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>

        <script src="js/scripts.js"></script>
      </body>
    </div>
  );
}

export default App;
