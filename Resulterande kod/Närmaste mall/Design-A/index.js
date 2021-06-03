"use strict";
import "../sass/user.scss";
import $ from "jquery";
const html_width = window.innerWidth;
const max_width = 1360;
const desktop_breakpoint = 1024;
const tablet_breakpoint = 768;
$(document).ready(function ($) {
  // desktop
  if (html_width > desktop_breakpoint) {
    let to_checkout = $("#CartControl_toCart").clone(true); //Recyclable
    $("#CartHeader .headerinfo .cartquantity").append(to_checkout); //Recyclable

    let sortering = $("#SortOptionsWrapper #SortOptions").detach(); //Recyclable
    $("#FilterWrapper").prepend(sortering); //Recyclable
    $("#SortOptions").prepend(`
      <a id="F_D22301" class="fw-button fw-button-xs fw-button-outline sort" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$view$ctl02$F_D22301&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">Artikelkod</a>
    `); //Recyclable
    $(".product-code span").append("4342");
    $("#MainFooter_FooterCompanyInfo").prepend(
      '<h2 class="contact-title">Kontakta oss</h2>'
    );
    $("#SortOptions").after('<div class="divider-line"></div>');
    $("#Tree .level2").prepend(
      '<img src="http://elinedev.test/design-a/images/bench-furniture.png">'
    );

    $("#Tree .level2:not(:nth-child(2))").append(`
        <ul class="customDrawer">
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Bord">Bord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Fatoljer">Klaffbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Soffor">Köksbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Lampbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Matbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Skrivbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Sängbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Bord">Bord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Fatoljer">Klaffbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Soffor">Köksbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Lampbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Matbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Skrivbord</a></li>
          <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Sängbord</a></li>
        </ul>
        `);
    $("#Tree .level2:nth-child(2)").append(`
          <ul class="customDrawer">
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Bord">NewYork</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Fatoljer">Modern</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Soffor">Läder</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Stil</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Skandinavien</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Milano</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Casual</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Bord">NewYork</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Fatoljer">Modern</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Soffor">Läder</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Stil</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Skandinavien</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Milano</a></li>
            <li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Casual</a></li>
          </ul>
          `);
    $("#Header").after('<div id="overlay"></div>');
    $("#Tree .level1").mouseenter(function () {
      $("#overlay").show();
    });
    $("#Tree .level1").mouseleave(function () {
      $("#overlay").hide();
    });
  }
  // tablet och mobil
  if (html_width <= desktop_breakpoint) {
    let huvudmeny = $("#MainMenu .fw-drawerMenu").detach(); //Recyclable
    let sortering = $("#SortOptionsWrapper #SortOptions").detach(); //Recyclable
    $("#NavTree-Horisontell").after(huvudmeny); //Recyclable
    $("#FilterWrapper").prepend(sortering); //Recyclable
    $("#SortOptions").prepend(`
      <a id="F_D22301" class="fw-button fw-button-xs fw-button-outline sort" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$view$ctl02$F_D22301&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">Artikelkod</a>
    `); //Recyclable

    $("#SortOptions").append('<div class="divider-line"></div>'); //Recyclable
    $(".product-code span").append("4342");

    let logo = $("#Logo").detach();
    $("#OpenCartWrapper").after(logo);

    $("#MainFooter_FooterCompanyInfo").prepend(
      '<h2 class="contact-title">Kontakta oss</h2>'
    );

    let close_btn = $("#CloseTree").detach();
    $("#NavTree-Horisontell").prepend(close_btn);
    $("#Tree").after('<div id="overlay"></div>');

    $("#OpenTree").on("click", function () {
      $("#overlay").toggleClass("show");
    });
    $("#CloseTree").on("click", function () {
      $("#overlay").toggleClass("show");
    });
  }
});
