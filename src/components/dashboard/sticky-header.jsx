import React from "react";

export default function stickyHeader() {
  return (
    <div class="sticky-header">
      <div class="container clearfix">
        <figure class="logo-box">
          <a href="index.html">
            <img src="images/small-logo.png" alt="" />
          </a>
        </figure>
        <div class="menu-area">
          <nav class="main-menu navbar-expand-lg">
            <div class="navbar-header">
              {/* <!-- Toggle Button -->       */}
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="navbar-collapse collapse clearfix">
              <ul class="navigation clearfix">
                <li class="current dropdown">
                  <a href="#">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home Page 01</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Page 02</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Page 03</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home Page 04</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home Page 05</a>
                    </li>
                    <li>
                      <a href="index-6.html">Home Page 06</a>
                    </li>
                    <li class="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li>
                          <a href="index.html">Header Style 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Header Style 02</a>
                        </li>
                        <li>
                          <a href="index-3.html">Header Style 03</a>
                        </li>
                        <li>
                          <a href="index-4.html">Header Style 04</a>
                        </li>
                        <li>
                          <a href="index-5.html">Header Style 05</a>
                        </li>
                        <li>
                          <a href="index-6.html">Header Style 06</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li>
                      <a href="service.html">Services Type 01</a>
                    </li>
                    <li>
                      <a href="service-2.html">Services Type 02</a>
                    </li>
                    <li>
                      <a href="service-3.html">Services Type 03</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="about.html">About Type 01</a>
                    </li>
                    <li>
                      <a href="about-2.html">About Type 02</a>
                    </li>
                    <li>
                      <a href="team.html">Team Type 01</a>
                    </li>
                    <li>
                      <a href="team-2.html">Team Type 02</a>
                    </li>
                    <li>
                      <a href="team-3.html">Team Type 03</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq Page</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop Page</a>
                    </li>
                    <li>
                      <a href="single-shop.html">Single Shop</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart Page</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout Page</a>
                    </li>
                    <li>
                      <a href="error.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Portfolio</a>
                  <ul>
                    <li>
                      <a href="portfolio.html">Portfolio Type 01</a>
                    </li>
                    <li>
                      <a href="portfolio-2.html">Portfolio Type 02</a>
                    </li>
                    <li>
                      <a href="portfolio-3.html">Portfolio Type 03</a>
                    </li>
                    <li>
                      <a href="portfolio-4.html">Portfolio Type 04</a>
                    </li>
                    <li>
                      <a href="portfolio-single.html">Portfolio Single 01</a>
                    </li>
                    <li>
                      <a href="portfolio-single-2.html">Portfolio Single 02</a>
                    </li>
                    <li>
                      <a href="portfolio-single-3.html">Portfolio Single 03</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-classic.html">Blog Classic</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
