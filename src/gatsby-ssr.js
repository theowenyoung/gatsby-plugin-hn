import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="gatsby-plugin-reddit-preconnect-0"
      rel="preconnect"
      href="https://embed.redditmedia.com"
    />,
    <link
      key="gatsby-plugin-reddit-preconnect-1"
      rel="preconnect"
      href="https://www.reddit.com"
    />,
    <link
      key="gatsby-plugin-reddit-preconnect-2"
      rel="preconnect"
      href="https://www.redditstatic.com"
    />,
  ]);
};
