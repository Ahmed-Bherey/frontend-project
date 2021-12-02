<template>
  <div id="app">
    <div id="nav">
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
                    <router-link class="atag" to="/">Home</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/about">About Corona</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Symptoms">Symptoms</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Prevention">Prevention</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Treatment">Treatment</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/FAQ">FAQ</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/News">News</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Do-Don’t">Do & Don’t</router-link>
                  </b-nav-item>
                </b-navbar-nav>
                <!-- <li class="dark-mode"><font-awesome-icon :icon="['fas' , 'moon']" /></li> -->
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
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
                    <router-link class="atag" to="/">Home</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/about">About Corona</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Symptoms">Symptoms</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Prevention">Prevention</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Treatment">Treatment</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/FAQ">FAQ</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/News">News</router-link>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <router-link class="atag" to="/Do-Don’t">Do & Don’t</router-link>
                  </b-nav-item>
                </b-navbar-nav>
                <li class="dark-mode"><font-awesome-icon :icon="['fas' , 'moon']" /></li>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <router-view />
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
            <b-col cols="6" lg="4" xl="3" class="foot-con">
              <ul>
                <h5>HELPFULL LINK</h5>
                <li><a href="#">Healthcare Professionals</a></li>
                <li><a href="#">Healthcare Facilities</a></li>
                <li><a href="#">Older Adults & Medical Conditions</a></li>
                <li><a href="#">Repare your Family</a></li>
              </ul>
            </b-col>
            <b-col cols="6" lg="4" xl="3" class="foot-con">
              <ul>
                <h5>IMPORTANT LINK</h5>
                <li><a href="#">WHO Website</a></li>
                <li><a href="#">CDC Website</a></li>
                <li><a href="#">NHS Website</a></li>
                <li><a href="#">Harvard Health</a></li>
              </ul>
            </b-col>
          </b-row>
        </div>
        <hr>
        <div class="copyright">
          <div class="copy-name justify-content-between">
            <p>© 2020 COVID-19. Template Made by<span> Ahmed Bherey</span></p>
            <a href="#">Privacy Policy</a>
          </div>
          <div class="foot-para">
            <p>Disclaimer: We hope you find the information presented on this website useful. This website is for general information and raise awareness of (2019-nCoV) only.</p>
            <p>All the information based on WHO, NHS and CDC website. Information on our website is meant for awareness, if you have any doubt please verify from respective site.</p>
          </div>
        </div>
      </div>
    </footer>
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

  .atag {
    color: var(--third-color);
    text-decoration: none;
    font-weight: bold;
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
<script>
  let navBar = document.querySelector(".sticky-navbar");
  let body = document.querySelector("html,body") 
  window.addEventListener('scroll' , ()=>{
    if(body.scrollTop >=100){
      navBar.style.display= "block";
    }else{
      navBar.style.display= "none";
    }
  })
</script>