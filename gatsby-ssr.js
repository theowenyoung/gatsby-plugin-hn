"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents;
  setHeadComponents([/*#__PURE__*/_react.default.createElement("link", {
    key: "gatsby-plugin-hn-preconnect-0",
    rel: "preconnect",
    href: "https://hn.algolia.com"
  })]);
};

exports.onRenderBody = onRenderBody;