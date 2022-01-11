"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var NumericContent = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  color: ", ";\n"])), function (props) {
  return props.color;
});

var Number = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 2.5rem;\n  line-height: 3rem;\n  padding: 0 5px;\n"])));

var ScaleAndIndicatorContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%:\n  padding: 0 5px;\n"])));

var Scale = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  margin-top: 0.3rem;\n  font-size: 1rem;\n"])));

var Indicator = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  ", "\n  border-left: 0.5rem solid transparent;\n  border-right: 0.5rem solid transparent\n"])), function (props) {
  return props.indicator === 'Up' ? 'border-bottom: 0.625rem solid' : 'border-top: 0.625rem solid';
});

var Numeric = function Numeric(_ref) {
  var number = _ref.number,
      scale = _ref.scale,
      indicator = _ref.indicator,
      color = _ref.color,
      icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement(NumericContent, {
    color: color
  }, icon, /*#__PURE__*/_react["default"].createElement(Number, null, number), /*#__PURE__*/_react["default"].createElement(ScaleAndIndicatorContainer, null, indicator === 'Up' || indicator === 'Down' ? /*#__PURE__*/_react["default"].createElement(Indicator, {
    indicator: indicator
  }) : null, /*#__PURE__*/_react["default"].createElement(Scale, null, scale)));
};

var _default = Numeric;
exports["default"] = _default;
module.exports = exports.default;