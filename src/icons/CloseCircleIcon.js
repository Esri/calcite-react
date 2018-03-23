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

var CloseCircleIcon = function CloseCircleIcon(_ref) {
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
      d:
        'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z'
    })
  );
};

exports.default = CloseCircleIcon;
