'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nba = require('nba');

var _nba2 = _interopRequireDefault(_nba);

var _player_card = require('../components/player_card');

var _player_card2 = _interopRequireDefault(_player_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/chris/Documents/nba-lineup/pages/index.js?entry';
// import fetch from 'isomorphic-unfetch'


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_player_card2.default, { playerInfo: props.playerInfo, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _nba2.default.stats.playerInfo({ PlayerID: 202330 });

        case 2:
          data = _context.sent;
          return _context.abrupt('return', {
            playerInfo: data.commonPlayerInfo[0]
          });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;

// teamId: 1610612762
// stats.nba.com/stats/commonplayerinfo/?playerID=202330
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5CQSIsIlBsYXllckNhcmQiLCJJbmRleCIsInByb3BzIiwicGxheWVySW5mbyIsImdldEluaXRpYWxQcm9wcyIsInN0YXRzIiwiUGxheWVySUQiLCJkYXRhIiwiY29tbW9uUGxheWVySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7OztBQUVQLEFBQU87Ozs7Ozs7QUFIUDs7O0FBS0EsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDt5QkFDWixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsdUNBQVcsWUFBWSxNQUF4QixBQUE4QjtnQkFBOUI7a0JBRlUsQUFDWixBQUNFO0FBQUE7O0FBRko7O0FBTUEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtNQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDSCxjQUFBLEFBQUksTUFBSixBQUFVLFdBQVcsRUFBRSxVQURwQixBQUNILEFBQXFCLEFBQVk7O2FBQTlDO0FBRGdCLDBCQUFBOzt3QkFJUixLQUFBLEFBQUssaUJBSkcsQUFHZixBQUNPLEFBQXNCO0FBRDdCLEFBQ0w7O2FBSm9CO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF4QixBQVFBOztrQkFBQSxBQUFlOztBQUVmO0FBQ0EiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvY2hyaXMvRG9jdW1lbnRzL25iYS1saW5ldXAifQ==