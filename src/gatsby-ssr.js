import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="gatsby-plugin-hn-preconnect-0"
      rel="preconnect"
      href="https://hn.algolia.com"
    />,
  ]);
};
