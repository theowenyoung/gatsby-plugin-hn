const injectScript = () => {
  const js = document.createElement(`script`);
  const firstScript = document.getElementsByTagName(`script`)[0];
  js.id = `gatsby-plugin-reddit`;
  js.src = `//embed.redditmedia.com/widgets/platform.js`;
  firstScript.parentNode.insertBefore(js, firstScript);
  return true;
};

let injected = false;

const embedClasses = [`.reddit-card`].join(`,`);

exports.onRouteUpdate = () => {
  if (document.querySelector(embedClasses) !== null) {
    if (!injected) {
      injectScript();
      injected = true;
    }
  }
};
