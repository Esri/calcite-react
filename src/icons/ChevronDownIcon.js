'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var ChevronDownIcon = function ChevronDownIcon(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === undefined ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === undefined ? 24 : _ref$height,
    _ref$viewBox = _ref.viewBox,
    viewBox = _ref$viewBox === undefined ? '0 0 24 24' : _ref$viewBox,
    className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      'width',
      'height',
      'viewBox',
      'className',
      'children'
    ]);

  var classes = 'mdi-icon';
  if (className) classes += ' ' + className;

  return _react2.default.createElement(
    'svg',
    _extends({}, props, {
      width: width,
      height: height,
      viewBox: viewBox,
      className: classes
    }),
    _react2.default.createElement('path', {
      d: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'
    })
  );
};

exports.default = ChevronDownIcon;
