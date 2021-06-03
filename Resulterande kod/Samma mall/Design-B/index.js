"use strict";
import "../sass/user.scss";
import $ from "jquery";
const html_width = window.innerWidth;
const max_width = 1360;
const desktop_breakpoint = 1024;
const tablet_breakpoint = 768;
$(document).ready(function ($) {
  $(".bcSep").text("|");
  let pager = $("#PagerBottom").clone(true);
  $("#UpdatePanel1").prepend($(pager).attr("id", "PagerTop"));
  $(".buy-inner").prepend(
    '<input type="text" class="antal" value="1"></input>'
  );
  $(".product-code span").text("Artikelnummer 1102149S0000");
  $("#MainMenu .menu-has-sub .menu-sub-title").append(
    '<i class="fw-icon-angle-right"></i>'
  );
  $("#Footer").append(
    `<div id="MainFooter_FooterCompanyInfo" class="fw-col-xs-12 fw-col-lg-5"> <div id="MainFooter_FooterText" class="footerText"> <p class=".bottom-logo"><img src="/eline414a/images/site/logo.svg" alt="" width="120" /></p> <div class="double-info"><div class="lines"></div> <div class="left"> <div class="companyPhoneNo"> <span class="label">Telefon:</span><a class="value" href="tel:046-280 20 00"> 046-280 20 00</a> </div> <div class="companyEmail"><a class="value" href="mailto:info@unikum.se">info@unikum.se</a> </div> </div><div class="right"> <div class="companyAddress"><span class="value">Traktorv 14<br />226 60 Lund</span> </div> </div> </div> <p class="icons" style="width: 100%;"><img style="filter: grayscale(1);" src="/eline414a/Images/user/social_facebook.png" alt="" /> <img style="filter: grayscale(1);" src="/eline414a/Images/user/social_twitter.png" alt="" /><img style="filter: grayscale(1);" src="/eline414a/Images/user/social_google.png" alt="" /><img style="filter: grayscale(1);" src="/eline414a/Images/user/social_addthis.png" alt="" /></p> </div> </div>`
  );
  $("#ProdListHeader .list_info").append(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  $("#SortContentTitle").append('<i class="arrow-icon">&#9660</i>');
  if (html_width > desktop_breakpoint) {
    $("#Main").prepend('<div id="custom-side-menu" class="custom-menu"></div>'); //Recyclable
    let products = $("#Tree").detach(); //Recyclable
    let topMenu = $("#MainMenu").detach(); //Recyclable
    let mainSearch = $("#MainSearch").detach(); //Recyclable
    let sortPage = $("#SortAndPageSettings").detach(); //Recyclable
    let cartToggle = $("#OpenCartContent").detach(); //Recyclable
    let userTab = $("#UserTabToggle").detach(); //Recyclable
    let breadcrumbs = $("#Breadcrumbs").detach(); //Recyclable
    $("#custom-side-menu").prepend(products); //Recyclable
    $("#Logo").after(topMenu); //Recyclable
    $("#MainMenu").after(
      '<div class="language"><strong>SV</strong> / EN / DE</div>'
    );
    $("#custom-side-menu").prepend(mainSearch); //Recyclable
    $("#FilterHits").after(sortPage); //Recyclable
    $("#Header").append('<div class="lower-header"></div>'); //Recyclable
    $(".lower-header").append(cartToggle); //Recyclable
    $(".lower-header").append(userTab); //Recyclable
    $("#SearchBtn").empty().append('<i class="fw-icon-search"></i>');
    $("#ProdListHeader").after(breadcrumbs);
  }
  if (html_width <= desktop_breakpoint) {
    let login = $("#MenuToolbarTabs ul li:first").detach(); //Recyclable
    let regIcon = $(
      "#menuLoginForm_RegistrationLink .fw-button .fw-icon-user-add"
    ); //Recyclable
    let register = $("#menuLoginForm_RegistrationLink").detach(); //Recyclable
    $(register).find(".fw-button").empty().append(regIcon); //Recyclable
    $("#HeaderInner").prepend(register); //Recyclable
    $("#HeaderInner").prepend(login); //Recyclable
    $("#Footer").append(
      '<div class="bottom-menu"><a class="produkter">Produkter</a><a class="sok">Sök</a><a class="varukorg"></a></div>'
    ); //Recyclable
    let openCart = $("#OpenCartContent").detach(); //Recyclable
    $("#Footer .bottom-menu .varukorg").append(openCart); //Recyclable
    let search = $("#FilterSearch").clone(true).attr("id", "offcanvasSearch"); //Recyclable
    $("#Tree").prepend(search); //Recyclable
    $(".produkter, .sok, #OpenMenu").on("click", function (e) {
      //Recyclable
      $("body").addClass("offcanvas-menu-open"); //Recyclable
      let source = $(e.target).attr("class"); //Recyclable
      if (source == "produkter" || source == "sok") {
        //Recyclable
        $("#MainMenu").hide(); //Recyclable
        $("#Tree").show(); //Recyclable
      } else if (source.includes("header-icon")) {
        //Recyclable
        $("#MainMenu").show(); //Recyclable
        $("#Tree").hide(); //Recyclable
      } //Recyclable
    }); //Recyclable
    $("#MainMenu .menu-has-sub").on("click", function () {
      $(this).find("ul").toggleClass("open");
    });
  }
});
