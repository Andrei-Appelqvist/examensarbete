"use strict";
import "../sass/user.scss";
import $ from "jquery";
const html_width = window.innerWidth;
const max_width = 1360;
const desktop_breakpoint = 1024;
const tablet_breakpoint = 768;
$(document).ready(function ($) {
  $("#ShowAllRows").click();
  $("#D22302").before('<span class="cell">Artikelkod</span>');
  $(".D22302").before(
    `<a class="cell" href="/eline414a/sv/Sortiment/Textiler/Gardiner/Gardin_Linne?id=GAR-0001&amp;Dim=SVA"><span>GBDB002W</span></a>`
  );
  $("#D12814").before(
    `<span class="cell">Infofält(varugrupp) 1</span><span class="cell">Infofält(varugrupp) 2</span><span class="cell">Infofält(varugrupp) 3</span><span class="cell"> I lager</span>`
  );
  $(".row .D12814").before(
    `<span class="cell lager"> <i class="check">✓</i> I lager</span>`
  );
  $(".D22351").after(
    `<span class="cell"></span><span class="cell"></span><span class="cell"></span>`
  );
});
