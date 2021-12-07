<template>
  <div id="app">
    <div id="nav">
      <div class="con">
        <b-navbar class="container" toggleable="lg" type="dark" variant="">
          <b-navbar-brand href="#">
            <!------------------- Start Logo ---------------->
            <h2>C
              <font-awesome-icon class="covido" :icon="['fas' , 'virus']" />VID<span>19</span></h2>
          </b-navbar-brand>
          <!------------------- End Logo ---------------->

          <!------------------- Start Menu Icon ---------------->
          <b-navbar-toggle target="nav-collapse" class="bbb">
            <div class="mobile-btn">
              <span>Menu</span>
              <span>
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
              </span>
            </div>
          </b-navbar-toggle>
          <!------------------- End Menu Icon ---------------->

          <!------------------- Start NavBar ---------------->
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ms-auto">
              <div class="nav-bar">
                <b-navbar-nav>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar active" to="/">Home</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/about">About Corona</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/Symptoms">Symptoms</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/Prevention">Prevention</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/Treatment">Treatment</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/FAQ">FAQ</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/News">News</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar fixed-item" to="/Do-Don’t">Do & Don’t</router-link>
                  </b-nav-item>
                </b-navbar-nav>
              </div>
            </b-navbar-nav>
          </b-collapse>
          <!------------------- End NavBar ---------------->
        </b-navbar>
      </div>
    </div>

    <!------------------- Start Sticky NavBar ---------------->
    <div id="nav" class="sticky-navbar">
      <div class="con">
        <b-navbar class="container" toggleable="lg" type="dark" variant="">
          <b-navbar-brand href="#">
            <h2>C
              <font-awesome-icon class="covido" :icon="['fas' , 'virus']" />VID<span>19</span></h2>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ms-auto">
              <div class="nav-bar">
                <b-navbar-nav>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar active" to="/">Home</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/about">About Corona</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/Symptoms">Symptoms</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/Prevention">Prevention</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/Treatment">Treatment</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/FAQ">FAQ</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/News">News</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag activeBar" to="/Do-Don’t">Do & Don’t</router-link>
                  </b-nav-item>
                </b-navbar-nav>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="go-top position-fixed end-0 bottom-0">
        <div class="container">
          <font-awesome-icon class="top-icon" :icon="['fas' , 'arrow-up']" />
        </div>
      </div>
    </div>
    <!------------------- End Sticky NavBar ---------------->
    <router-view />

    <!------------------- Start Footer ---------------->
    <footer>
      <div class="container">
        <div class="footer-info text-center">
          <b-row>
            <b-col cols="6" lg="4" xl="3" class="foot-con">
              <h2>C
                <font-awesome-icon class="covid" :icon="['fas' , 'virus']" />VID<span>19</span></h2>
              <p>This website is for health information and advice about coronavirus (COVID-19), how to prevent and
                protect yourself from disease.</p>
              <p>Learn about the government response to coronavirus on GOV.UK.</p>
              <div class="social-media">
                <div>
                  <font-awesome-icon :icon="['fab' , 'facebook-f']" />
                </div>
                <div>
                  <font-awesome-icon :icon="['fab' , 'twitter']" />
                </div>
                <div>
                  <font-awesome-icon :icon="['fab' , 'youtube']" />
                </div>
              </div>
            </b-col>
            <!----- Start Footer Items ------>
            <!-- item 1 -->
            <b-col cols="6" lg="4" xl="3" class="foot-con">
              <ul>
                <h5>QUICK LINK</h5>
                <li><a href="#">About Corona</a></li>
                <li><a href="#">Symptoms</a></li>
                <li><a href="#">Prevention</a></li>
                <li><a href="#">Protect Youself</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </b-col>
            <!-- item 2 -->
            <b-col cols="6" lg="4" xl="3" class="foot-con">
              <ul>
                <h5>HELPFULL LINK</h5>
                <li><a href="#">Healthcare Professionals</a></li>
                <li><a href="#">Healthcare Facilities</a></li>
                <li><a href="#">Older Adults & Medical Conditions</a></li>
                <li><a href="#">Repare your Family</a></li>
              </ul>
            </b-col>
            <!-- item 2 -->
            <b-col cols="6" lg="4" xl="3" class="foot-con">
              <ul>
                <h5>IMPORTANT LINK</h5>
                <li><a href="#">WHO Website</a></li>
                <li><a href="#">CDC Website</a></li>
                <li><a href="#">NHS Website</a></li>
                <li><a href="#">Harvard Health</a></li>
              </ul>
            </b-col>
            <!----- End Footer Items ------>
          </b-row>
        </div>
        <hr>
        <!-- Footer Copyright -->
        <div class="copyright">
          <div class="copy-name justify-content-between">
            <p>© 2020 COVID-19. Template Made by<span> Ahmed Bherey</span></p>
            <a href="#">Privacy Policy</a>
          </div>
          <div class="foot-para">
            <p>Disclaimer: We hope you find the information presented on this website useful. This website is for
              general information and raise awareness of (2019-nCoV) only.</p>
            <p>All the information based on WHO, NHS and CDC website. Information on our website is meant for awareness,
              if you have any doubt please verify from respective site.</p>
          </div>
        </div>
      </div>
    </footer>
    <!------------------- End Footer ---------------->

    <!------------------- Start Side Menu ---------------->
    <aside class="side-menu">
      <b-navbar-nav>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/">Home</router-link>
        </b-nav-item>
        <hr>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/about">About Corona</router-link>
        </b-nav-item>
        <hr>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/Symptoms">Symptoms</router-link>
        </b-nav-item>
        <hr>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/Prevention">Prevention</router-link>
        </b-nav-item>
        <hr>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/Treatment">Treatment</router-link>
        </b-nav-item>
        <hr>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/FAQ">FAQ</router-link>
        </b-nav-item>
        <hr>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/News">News</router-link>
        </b-nav-item>
        <hr>
        <b-nav-item class="side-ul" href="#">
          <router-link class="atag" to="/Do-Don’t">Do & Don’t</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </aside>
    <div class="overlayMenu"></div>
    <!------------------- End Side Menu ---------------->
  </div>
</template>

<style>
  #nav h2 {
    color: var(--main-color);
    font-weight: bold;
  }

  #nav h2 span {
    color: var(--third-color);
    font-weight: bold;
  }

  .mobile-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    color: var(--third-color);
    font-family: Arial, Helvetica, sans-serif;
    display: none;
  }

  .mobile-btn.open .line1 {
    transform: rotate(45deg) translate(2px, 10px);
    -webkit-transform: rotate(45deg) translate(2px, 10px);
    -moz-transform: rotate(45deg) translate(2px, 10px);
    -ms-transform: rotate(45deg) translate(2px, 10px);
    -o-transform: rotate(45deg) translate(2px, 10px);
  }

  .mobile-btn.open .line2 {
    opacity: 0;
  }

  .mobile-btn.open .line3 {
    transform: rotate(-45deg) translate(0px, -9px);
    -webkit-transform: rotate(-45deg) translate(0px, -9px);
    -moz-transform: rotate(-45deg) translate(0px, -9px);
    -ms-transform: rotate(-45deg) translate(0px, -9px);
    -o-transform: rotate(-45deg) translate(0px, -9px);
  }

  .mobile-btn .line {
    width: 35px;
    height: 3px;
    margin: 3px 5px;
    background-color: var(--third-color);
    transition: .7s ease-in-out;
  }

  .atag {
    color: var(--third-color);
    text-decoration: none;
    font-weight: bold;
  }

  .fixed-item {
    background-color: var(--seceond-color);
    border-radius: 15px;
    color: white;
    padding: 10px;
  }

  .atag:hover {
    color: var(--seceond-color);
  }

  .con {
    background-color: var(--overlay);
  }

  .covido {
    color: var(--covido-color);
  }
</style>