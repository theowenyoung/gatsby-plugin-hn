"use strict";

var injectScript = function injectScript() {
  var js = document.createElement("script");
  var firstScript = document.getElementsByTagName("script")[0];
  js.id = "gatsby-plugin-reddit";
  js.src = "//embed.redditmedia.com/widgets/platform.js";
  firstScript.parentNode.insertBefore(js, firstScript);
  return true;
};

var injected = false;
var embedClasses = [".reddit-card"].join(",");

exports.onRouteUpdate = function () {
  if (document.querySelector(embedClasses) !== null) {
    if (!injected) {
      injectScript();
      injected = true;
    }
  }
};