'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CATPICS_COMPONENT = 'com.robinmalfait.catpics';

exports.default = function (robot) {
  var Images = robot.cards.Images;


  var Catpics = function Catpics(_ref) {
    var images = _ref.images;

    var other = _objectWithoutProperties(_ref, ['images']);

    return _react2.default.createElement(Images, _extends({}, other, {
      title: 'Random Cat Pictures',
      images: images
    }));
  };

  robot.registerComponent(Catpics, CATPICS_COMPONENT);

  var spawnPics = function spawnPics() {
    var count = arguments.length <= 0 || arguments[0] === undefined ? 15 : arguments[0];

    var images = [];

    for (var i = 0; i < count; i++) {
      images.push({
        title: 'Cat Picture ' + (i + 1),
        src: 'http://thecatapi.com/api/images/get?format=src&type=gif&time=' + +new Date() + '-' + i
      });
    }

    robot.addCard(CATPICS_COMPONENT, { images: images });
  };

  robot.listen(/^catpics$/, {
    description: "Show some a cat pic!",
    usage: 'catpics'
  }, function () {
    spawnPics(15);
  });

  robot.listen(/^catpics (.*)$/, {
    description: "Show some a cat pic!",
    usage: 'catpics <number>'
  }, function (res) {
    spawnPics(res.matches.number);
  });
};