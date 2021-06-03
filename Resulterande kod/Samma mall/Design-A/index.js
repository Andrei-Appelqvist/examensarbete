"use strict";
import "../sass/user.scss";
import $ from "jquery";
const html_width = window.innerWidth;
const max_width = 1360;
const desktop_breakpoint = 1024;
const tablet_breakpoint = 768;
$(document).ready(function ($) {
  $(".product-code span").append("4342");
  $("#MainFooter_FooterCompanyInfo").prepend(
    '<h2 class="contact-title">Kontakta oss</h2>'
  );
  $("#ShowAllRows").get(0).click();
  $("#FilterWrapper").append('<div class="divider-line"></div>');
  $(".product-code span").append("4342");
  let sort = $("#SortOptions").detach(); //Recyclable
  $("#FilterWrapper").prepend(sort); //Recyclable
  $("#SortOptions").prepend(
    `<a id="F_D22301" class="fw-button fw-button-xs fw-button-outline sort" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$view$ctl02$F_D22301&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">Artikelkod</a>`
  ); //Recyclable
  let login = $("#MenuToolbarTabs .fw-list-unstyled").detach(); //Recyclable
  $("#MainMenu .fw-list-unstyled").append(login); //Recyclable

  if (html_width > desktop_breakpoint) {
    let menus = $("#MainMenu").detach(); //Recyclable
    $("#HeaderInner").prepend(menus); //Recyclable
    $(".menu-has-sub").remove();
    let menu_items = $("#MainMenu .fw-list-unstyled .fw-list-unstyled")
      .children()
      .detach(); //Recyclable
    $("#MainMenu .fw-list-unstyled").append(menu_items); //Recyclable
    $("#MainMenu .fw-list-unstyled .fw-list-unstyled").remove(); //Recyclable
    let search_bar = $("#MainSearch").show().detach(); //Recyclable
    $("#Logo").after(search_bar);
    let tree_menu = $("#Tree").detach(); //Recyclable
    $("#OpenCartContent").after(tree_menu); //Recyclable
    $("#Tree .fw-accordion .fw-accordionContent li").prepend(
      '<img src="http://elinedev.test/design-a/images/bench-furniture.png">'
    );
    $("#Header").after('<div id="overlay"></div>'); //Recyclable
    $("#Tree .fw-accordion li").mouseenter(function () {
      //Recyclable
      $("#overlay").show(); //Recyclable
    }); //Recyclable
    $("#Tree .fw-accordion li").mouseleave(function () {
      //Recyclable
      $("#overlay").hide(); //Recyclable
    }); //Recyclable
    $("#Tree .fw-accordion .fw-accordionContent li").append(
      `<ul class="customDrawer"><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Bord">Bord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Fatoljer">Klaffbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Soffor">Köksbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Lampbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Matbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Skrivbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Sängbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Bord">Bord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Fatoljer">Klaffbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Soffor">Köksbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Lampbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Matbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Skrivbord</a></li><li class="level3"><a href="/eline414a/sv/Sortiment/Mobler/Stolar">Sängbord</a></li></ul>`
    );

    let interval = setInterval(() => {
      //Recyclable
      if ($("#OpenCart .tocheckout").length < 1) {
        //Recyclable
        let quantity = $("#CartHeader .headerinfo .cartquantity").clone(); //Recyclable
        let to_checkout = $("#CartHeader .tocheckout").clone(true); //Recyclable
        $("#OpenCart").append(quantity); //Recyclable
        $("#OpenCart").append(to_checkout); //Recyclable
      } //Recyclable
    }, 200); //Recyclable
  }
});
