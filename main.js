"use strict";

let btnShare = document.querySelector(".article-share"),
  articleSocial = document.querySelector(".article-content .article-social");

btnShare.onmouseenter = function () {
  articleSocial.classList.add("show-social");
};

btnShare.onmouseleave = function () {
  articleSocial.classList.remove("show-social");
};
