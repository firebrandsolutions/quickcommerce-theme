import React, { Component } from 'react'

/* Framework imports */
import SettingStore from '../../framework/src/js/stores/SettingStore.jsx'
import SettingActions from '../../framework/src/js/actions/SettingActions.jsx'

/* Generic imports */
import SiteLogo from '../../js/components/SiteLogo.jsx'
import LanguageSwitcher from '../../js/components/LanguageSwitcher.jsx'
import Toolbar from '../../js/components/Toolbar.jsx'
import Hero from '../../js/components/Hero.jsx'
import Categories from '../../js/components/Categories.jsx'
import Products from '../../js/components/Products.jsx'
import Brands from '../../js/components/Brands.jsx'
import Features from '../../js/components/Features.jsx'

/* Site specific imports */
import PagePreloader from '../../js/PagePreloader.jsx'
import Footer from '../../js/Footer.jsx'

import config from '../../config.js'
const settings = SettingStore

SettingActions.setConfig(config)

export default class QcShop001 extends Component {
  render() {
    return (
      <div>
        {/* Page Preloading */}
        {/* Modernizr */}
        {/* Body */}
        <PagePreloader 
            settings = {settings} />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Navbar */}
          {/* Remove ".navbar-sticky" class to make navigation bar scrollable with the page. */}
          <header className="navbar navbar-sticky">
            <SiteLogo 
                settings = {settings} />
            <LanguageSwitcher 
                settings = {settings} />
            <Toolbar 
                settings = {settings}
                cart = {settings.config.cart} />
          </header>{/* .navbar.navbar-sticky */}
          
          <section className="hero-slider" data-loop="true" data-autoplay="true" data-interval={7000}>
              <Hero
                settings = {settings}
                slides = {settings.config.pages[0].layout.images.heroSlides}
                />
                
              <div className="category-wrapper container">
                  <h3 className="cursive text-center padding-top">~ By Category ~</h3>
                  <Categories 
                    settings = {settings} 
                    categories = {settings.config.pages[0].layout.images.categories} />
              </div>
          </section>
          
          {/* Content Wide */}
          {/*<section className="container-fluid main-content">*/}
          {/* Content */}
          <section className="container main-content">
            {/* Featured Categories */}
            <div className="row padding-top product-section">
              <h3 className="cursive text-center padding-top">~ Our Menu ~</h3>
              <Products 
                settings = {settings}
                items = {settings.config.catalog.items} />
              
            </div>{/* .row */}
          </section>{/* .container-fluid */}
          {/*<Brands 
          settings = {settings} />*/}
          
          {/*<div className="fw-section space-top-2x padding-top-3x padding-bottom-3x" style={{backgroundImage: 'url(img/video_bg.jpg)'}}>
            <div className="container padding-top-3x padding-bottom-3x text-center">
              <div className="space-top-3x space-bottom">
                
                <a href="https://player.vimeo.com/video/135832597?color=77cde3&title=0&byline=0&portrait=0" className="video-popup-btn">
                  <i className="material-icons play_arrow" />
                </a>
              </div>
              <p className="space-bottom-2x">Quick Commerce - your reliable partner.</p>
            </div>
          </div>*/}
          
          {/*<Features 
          settings = {settings} />*/}
          <Footer 
            settings = {settings} />
        </div>{/* .page-wrapper */}
        {/* JavaScript (jQuery) libraries, plugins and custom scripts */}
        {/* <body> */}
      </div>
    )
  }
}