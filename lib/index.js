"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactLinesEllipsis = _interopRequireDefault(require("react-lines-ellipsis"));

var _reactSpinners = require("react-spinners");

var _Numeric = _interopRequireDefault(require("./Numeric"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var GenericTile = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  margin: 5px;\n  font-family: 'Roboto', sans-serif;\n  border-radius: 0.125rem;\n  // cursor: pointer;\n  ", ";\n  outline: none;\n  box-sizing: border-box;\n  background-position: 0;\n  background-color: ", ";\n  // background-color: '#';\n  opacity: ", ";\n  border: 1px solid transparent;\n  box-shadow: 0 0 0 1px rgba(0,0,0,0.15);\n  vertical-align: top;\n\n  width: 11rem;\n  height: 11rem;\n  padding: 10px;\n\n  :hover {\n    background-color: #F7F9FA;\n    opacity: 0.4;\n    color: #1e1e28;\n  }\n\n  :active {\n    background-color: #1d83c5;\n    color: #f5f5f5;\n  }\n"])), function (props) {
  return props.onClick && 'cursor: pointer';
}, function (props) {
  return props.loading ? '#F4F6F7' : "#F7F9FA";
}, function (props) {
  return props.loading ? '0.3' : '1';
});

var Header = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  min-heightL 1.2em;\n  max-height: 2.4em;\n  font-size: 16px;\n"])));

var SubHeader = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  padding: 2px 0;\n  font-size: 12px;\n  color: #7A7C7D;\n  height: 2.4em;\n"])));

var Loading = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n    position: absolute;\n    width: 9rem;\n    height: 9rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n"])));

var TileContent = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  height: 5rem;\n"])));

var Footer = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 13px;\n"])));

var linesEllipsisSettings = {
  ellipsis: '...',
  trimRight: true,
  basedOn: 'letters'
};

var ReactGenericTile = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ReactGenericTile, _Component);

  function ReactGenericTile() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ReactGenericTile.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        header = _this$props.header,
        subheader = _this$props.subheader,
        footer = _this$props.footer,
        number = _this$props.number,
        scale = _this$props.scale,
        indicator = _this$props.indicator,
        loading = _this$props.loading,
        icon = _this$props.icon,
        size = _this$props.size,
        onClick = _this$props.onClick,
        color = _this$props.color;
    return /*#__PURE__*/_react["default"].createElement(GenericTile, {
      size: size,
      loading: loading,
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(Loading, null, /*#__PURE__*/_react["default"].createElement(_reactSpinners.ClipLoader, {
      sizeUnit: "px",
      size: 44,
      color: '#123abc',
      loading: loading
    })), /*#__PURE__*/_react["default"].createElement(Header, null, /*#__PURE__*/_react["default"].createElement(_reactLinesEllipsis["default"], _extends({
      text: header,
      maxLine: "2"
    }, linesEllipsisSettings))), /*#__PURE__*/_react["default"].createElement(SubHeader, null, /*#__PURE__*/_react["default"].createElement(_reactLinesEllipsis["default"], _extends({
      text: subheader,
      maxLine: "3"
    }, linesEllipsisSettings))), /*#__PURE__*/_react["default"].createElement(TileContent, null, /*#__PURE__*/_react["default"].createElement(_Numeric["default"], {
      icon: icon,
      number: number,
      scale: scale,
      color: color,
      indicator: indicator
    })), /*#__PURE__*/_react["default"].createElement(Footer, null, footer));
  };

  return ReactGenericTile;
}(_react.Component); // <TileContent footer="Current Quarter" unit="EUR" class="sapUiSmallMargin">
//   <content>
//     <NumericContent scale="M" value="1.96"
//       valueColor="Error" indicator="Up" />
//   </content>
// </TileContent>


exports["default"] = ReactGenericTile;
ReactGenericTile.defaultProps = {
  header: "",
  subheader: "",
  footer: "",
  loading: false,
  number: "",
  scale: "",
  color: "#000",
  indicator: null,
  icon: null,
  size: "Normal"
};
module.exports = exports.default;