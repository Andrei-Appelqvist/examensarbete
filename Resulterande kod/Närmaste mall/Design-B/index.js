"use strict";

import "../sass/user.scss";
import $ from "jquery";

const html_width = window.innerWidth;
const max_width = 1360;
const desktop_breakpoint = 1024;
const tablet_breakpoint = 768;
$(document).ready(function ($) {
  $("#ProdListHeader .list_info").append(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  $("#BreadMenu > .bcSep").text("|");
  $(".product-code span").text("Artikelnummer 1102149S0000");
  $(".buy-inner").prepend(
    '<input type="text" class="antal" value="1"></input>'
  );
  $("#Footer").append(
    `<div id="MainFooter_FooterCompanyInfo" class="fw-col-xs-12 fw-col-lg-5"> <div id="MainFooter_FooterText" class="footerText"> <p class=".bottom-logo"><img src="/eline414a/images/site/logo.svg" alt="" width="120" /></p> <div class="double-info"><div class="lines"></div> <div class="left"> <div class="companyPhoneNo"> <span class="label">Telefon:</span><a class="value" href="tel:046-280 20 00"> 046-280 20 00</a> </div> <div class="companyEmail"><a class="value" href="mailto:info@unikum.se">info@unikum.se</a> </div> </div><div class="right"> <div class="companyAddress"><span class="value">Traktorv 14<br />226 60 Lund</span> </div> </div> </div> <p class="icons" style="width: 100%;"><img style="filter: grayscale(1);" src="/eline414a/Images/user/social_facebook.png" alt="" /> <img style="filter: grayscale(1);" src="/eline414a/Images/user/social_twitter.png" alt="" /><img style="filter: grayscale(1);" src="/eline414a/Images/user/social_google.png" alt="" /><img style="filter: grayscale(1);" src="/eline414a/Images/user/social_addthis.png" alt="" /></p> </div> </div>`
  );
  // desktop
  if (html_width > desktop_breakpoint) {
    let logo = $("#Logo").detach();
    let breadcrumbs = $("#Breadcrumbs").detach();
    $("#ProdListHeader").after(breadcrumbs);
    $("#bottom-header-container").prepend(logo);
    let footer_info = $("#MainFooter_FooterCompanyInfo").detach();
  }

  // tablet och mobil
  if (html_width <= desktop_breakpoint) {
  }

  // enbart mobil
  if (html_width < tablet_breakpoint) {
  }

  /* Funktioner som ska anropas i loop */
  let interval = setInterval(() => {
    //Recyclable
    if (html_width > desktop_breakpoint) {
      //Recyclable
      $("#SortAndPageSettings").prepend(
        $("#FilterSearchContent #FilterSearch").detach()
      ); //Recyclable
    } //Recyclable
  }, 200); //Recyclable
});
