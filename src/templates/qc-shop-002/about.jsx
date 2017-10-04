import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        {/* Page Preloading */}
        {/* Body */}
        {/* Adding/Removing class ".page-preloading" is enabling/disabling background smooth page transition effect and spinner. Make sure you also added/removed link to page-preloading.js script in the <head> of the document. */}
        {/* Page Pre-Loader */}
        <div className="page-preloader">
          <div className="preloader">
            <img src="img/preloader.gif" alt="Preloader" />
          </div>
        </div>{/* .page-preloader */}
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Navbar */}
          {/* Remove ".navbar-sticky" class to make navigation bar scrollable with the page. */}
          <header className="navbar navbar-sticky">
            {/* Site Logo */}
            <a href="index.html" className="site-logo visible-desktop">
              <span>[</span> M
              <span className="text-gray">/</span>
              STORE <span>]</span>
            </a>{/* site-logo.visible-desktop */}
            <a href="index.html" className="site-logo visible-mobile">
              <span>[</span> M <span>]</span>
            </a>{/* site-logo.visible-mobile */}
            {/* Language Switcher */}
            <div className="lang-switcher">
              <div className="lang-toggle">
                <img src="img/flags/GB.png" alt="English" />
                <i className="material-icons arrow_drop_down" />
                <ul className="lang-dropdown">
                  <li><a href="#"><img src="img/flags/FR.png" alt="French" />FR</a></li>
                  <li><a href="#"><img src="img/flags/DE.png" alt="German" />DE</a></li>
                  <li><a href="#"><img src="img/flags/IT.png" alt="Italian" />IT</a></li>
                </ul>
              </div>
            </div>{/* .lang-switcher */}
            {/* Main Navigation */}
            {/* Control the position of navigation via modifier classes: "text-left, text-center, text-right" */}
            <nav className="main-navigation text-center">
              <ul className="menu">
                <li className="menu-item-has-children">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Home Version 1</a></li>
                    <li><a href="home-v2.html">Home Version 2</a></li>
                    <li><a href="home-v3.html">Home Version 3</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li><a href="shop-fullwidth-sl.html">Full Width Sidebar Left</a></li>
                    <li><a href="shop-fullwidth-sr.html">Full Width Sidebar Right</a></li>
                    <li><a href="shop-fullwidth-ft.html">Full Width Filters Top</a></li>
                    <li><a href="shop-boxed-sl.html">Boxed Sidebar Left</a></li>
                    <li><a href="shop-boxed-sr.html">Boxed Sidebar Right</a></li>
                    <li><a href="shop-boxed-ft.html">Boxed Filters Top</a></li>
                    <li><a href="shop-single.html">Single Product</a></li>
                    <li><a href="shopping-cart.html">Shopping Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="login.html">Login / Register Page</a></li>
                    <li><a href="account.html">User Account Page</a></li>
                  </ul>
                </li>
                <li><a href="blog.html">Blog</a></li>
                <li className="menu-item-has-children">
                  <a href="#">Gallery</a>
                  <ul className="sub-menu">
                    <li><a href="gallery-fullwidth-with-gap.html">Full Width With Gap</a></li>
                    <li><a href="gallery-fullwidth-no-gap.html">Full Width No Gap</a></li>
                    <li><a href="gallery-boxed-with-gap.html">Boxed With Gap</a></li>
                    <li><a href="gallery-boxed-no-gap.html">Boxed No Gap</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Multilevel</a>
                  <ul className="sub-menu">
                    <li className="submenu-item-has-children">
                      <a href="#">Submenu Item 1</a>
                      <ul className="sub-menu">
                        <li><a href="#">Submenu Item 1</a></li>
                        <li><a href="#">Submenu Item 2</a></li>
                        <li><a href="#">Submenu Item 3</a></li>
                      </ul>
                    </li>
                    <li className="submenu-item-has-children">
                      <a href="#">Submenu Item 2</a>
                      <ul className="sub-menu">
                        <li><a href="#">Submenu Item 1</a></li>
                        <li><a href="#">Submenu Item 2</a></li>
                        <li><a href="#">Submenu Item 3</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Submenu Item 3</a></li>
                    <li><a href="#">Submenu Item 4</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children current-menu-item">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li className="current-menu-item"><a href="about.html">About</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                  </ul>
                </li>
                <li className="hidden-md"><a href="elements.html">Elements</a></li>
              </ul>{/* .menu */}
            </nav>{/* .main-navigation */}
            {/* Toolbar */}
            <div className="toolbar">
              <div className="inner">
                <a href="#" className="mobile-menu-toggle"><i className="material-icons menu" /></a>
                <a href="account.html"><i className="material-icons person" /></a>
                <div className="cart-btn">
                  <a href="shopping-cart.html">
                    <i>
                      <span className="material-icons shopping_basket" />
                      <span className="count">2</span>
                    </i>
                  </a>
                  {/* Cart Dropdown */}
                  <div className="cart-dropdown">
                    <div className="cart-item">
                      <a href="shop-single.html" className="item-thumb">
                        <img src="img/cart/item01.jpg" alt="Item" />
                      </a>
                      <div className="item-details">
                        <h3 className="item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                        <h4 className="item-price">1 x $85.90</h4>
                      </div>
                      <a href="#" className="close-btn">
                        <i className="material-icons close" />
                      </a>
                    </div>{/* .cart-item */}
                    <div className="cart-item">
                      <a href="shop-single.html" className="item-thumb">
                        <img src="img/cart/item02.jpg" alt="Item" />
                      </a>
                      <div className="item-details">
                        <h3 className="item-title"><a href="shop-single.html">Storage Box</a></h3>
                        <h4 className="item-price">2 x $38.00</h4>
                      </div>
                      <a href="#" className="close-btn">
                        <i className="material-icons close" />
                      </a>
                    </div>{/* .cart-item */}
                    <div className="cart-subtotal">
                      <div className="column">
                        <span>Subtotal:</span>
                      </div>
                      <div className="column">
                        <span className="amount">$161.90</span>
                      </div>
                    </div>
                  </div>{/* .cart-dropdown */}
                </div>{/* .cart-btn */}
              </div>{/* .inner */}
            </div>{/* .toolbar */}
          </header>{/* .navbar.navbar-sticky */}
          {/* Featured Image */}
          <div className="featured-image" style={{backgroundImage: 'url(img/featured-image/about.jpg)'}} />
          {/* Content */}
          <section className="container padding-top-3x padding-bottom-3x">
            <h1>About</h1>
            <div className="row padding-top">
              <div className="col-md-5 col-sm-6 padding-bottom">
                <h3>The Brand</h3>
                <p className=" space-top">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>{/* .col-md-5.col-sm-6 */}
              <div className="col-sm-6 col-md-offset-1 padding-bottom">
                <h3>Mission</h3>
                <div className="quotation padding-top">
                  <div className="quotation-author">
                    <div className="quotation-author-ava">
                      <img src="img/team/quote_author.jpg" alt="James Cameron" />
                    </div>
                  </div>
                  <blockquote>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                    <cite>C.J. Cameron, Founder M-store Ltd.</cite>
                  </blockquote>
                </div>{/* .quotation */}
              </div>{/* .col-md-6.col-sm-6.col-md-offset-1 */}
            </div>{/* .row */}
            <hr className="padding-bottom" />
            <h3>Our Team</h3>
            <div className="row padding-top">
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
                    <div className="social-bar text-center space-bottom">
                      <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                        <i className="socicon-skype" />
                      </a>
                      <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                        <i className="socicon-facebook" />
                      </a>
                      <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                        <i className="socicon-googleplus" />
                      </a>
                    </div>{/* .social-bar */}
                    <img src="img/team/01.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Jonathan Doe</h4>
                  <span className="teammate-position">Co-Founder, CEO</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
                    <div className="social-bar text-center space-bottom">
                      <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                        <i className="socicon-twitter" />
                      </a>
                      <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                        <i className="socicon-facebook" />
                      </a>
                      <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                        <i className="socicon-instagram" />
                      </a>
                    </div>{/* .social-bar */}
                    <img src="img/team/02.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Branda Murray</h4>
                  <span className="teammate-position">Marketing Director</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
                    <div className="social-bar text-center space-bottom">
                      <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                        <i className="socicon-twitter" />
                      </a>
                      <a href="#" className="sb-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                        <i className="socicon-linkedin" />
                      </a>
                      <a href="#" className="sb-dribbble" data-toggle="tooltip" data-placement="top" title data-original-title="Dribbble">
                        <i className="socicon-dribbble" />
                      </a>
                    </div>{/* .social-bar */}
                    <img src="img/team/03.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Taylor White</h4>
                  <span className="teammate-position">Brand Director</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
              {/* Teammate */}
              <div className="col-xs-6 col-md-3">
                <div className="teammate">
                  <div className="teammate-thumb">
                    <div className="social-bar text-center space-bottom">
                      <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                        <i className="socicon-skype" />
                      </a>
                      <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                        <i className="socicon-facebook" />
                      </a>
                      <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                        <i className="socicon-googleplus" />
                      </a>
                    </div>{/* .social-bar */}
                    <img src="img/team/04.jpg" alt="Teammate" />
                  </div>
                  <h4 className="teammate-name">Suasanna Davis</h4>
                  <span className="teammate-position">Sales Director</span>
                </div>{/* .teammate */}
              </div>{/* .col-xs-6.col-md-3 */}
            </div>{/* .row */}
          </section>{/* .container */}
          {/* Video Popup */}
          <div className="fw-section padding-top-3x padding-bottom-3x" style={{backgroundImage: 'url(img/video_bg.jpg)'}}>
            <div className="container padding-top-3x padding-bottom-3x text-center">
              <div className="space-top-3x space-bottom">
                {/* Add ".light-skin" class to alter appearance. */}
                <a href="https://player.vimeo.com/video/135832597?color=77cde3&title=0&byline=0&portrait=0" className="video-popup-btn">
                  <i className="material-icons play_arrow" />
                </a>
              </div>
              <p className="space-bottom-2x">M-Store - your reliable partner.</p>
            </div>
          </div>{/* .fw-section */}
          {/* Footer */}
          <footer className="footer">
            <div className="column">
              <p className="text-sm">Need support? Call <span className="text-primary">001 (917) 555-4836</span></p>
              <div className="social-bar text-center space-bottom">
                <a href="#" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
                  <i className="socicon-skype" />
                </a>
                <a href="#" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
                  <i className="socicon-facebook" />
                </a>
                <a href="#" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title data-original-title="Google+">
                  <i className="socicon-googleplus" />
                </a>
                <a href="#" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i className="socicon-twitter" />
                </a>
                <a href="#" className="sb-instagram" data-toggle="tooltip" data-placement="top" title data-original-title="Instagram">
                  <i className="socicon-instagram" />
                </a>
              </div>{/* .social-bar */}
              <p className="copyright">© 2016. Made with <i className="text-danger material-icons favorite" /> by rokaux.</p>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Subscription
                <small>To receive latest offers and discounts from the shop.</small>
              </h3>
              <form action="//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&id=1194bb7544" method="post" target="_blank" className="subscribe-form" noValidate>
                <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail" />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_c7103e2c981361a6639545bd5_1194bb7544" tabIndex={-1} defaultValue /></div>
                <button type="submit"><i className="material-icons send" /></button>
              </form>
            </div>{/* .column */}
            <div className="column">
              <h3 className="widget-title">
                Payment Methods
                <small>We support one of the following payment methods.</small>
              </h3>
              <div className="cards"><img src="img/cards.png" alt="Cards" /></div>
              {/* Scroll To Top Button */}
              <div className="scroll-to-top-btn"><i className="material-icons trending_flat" /></div>
            </div>{/* .column */}
          </footer>{/* .footer */}
        </div>{/* .page-wrapper */}
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
      </div>
    )
  }
}