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

var CalendarBlankIcon = function CalendarBlankIcon(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === undefined ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === undefined ? 24 : _ref$height,
    _ref$viewBox = _ref.viewBox,
    viewBox = _ref$viewBox === undefined ? '0 0 24 24' : _ref$viewBox,
    className = _ref.className,
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
        'M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1'
    })
  );
};

exports.default = CalendarBlankIcon;
