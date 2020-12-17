"use strict";

var injectScript = function injectScript() {
  var js = document.createElement("script");
  var firstScript = document.getElementsByTagName("script")[0];
  js.id = "gatsby-plugin-hn";
  js.src = "//cdn.jsdelivr.net/gh/theowenyoung/hn@4/build/bundle.js";
  firstScript.parentNode.insertBefore(js, firstScript);
  return true;
};

var injected = false;
var embedClasses = [".hn-card"].join(",");

exports.onRouteUpdate = function () {
  if (document.querySelector(embedClasses) !== null) {
    if (!injected) {
      injectScript();
      injected = true;
    } else {
      if (typeof hnEmbed !== "undefined" && typeof window.hnEmbed.load === "function") {
        window.hnEmbed.load();
      }
    }
  }
};