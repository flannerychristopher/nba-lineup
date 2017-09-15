"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/chris/Documents/nba-lineup/components/player_card.js";

function PlayerCard(_ref) {
  var playerInfo = _ref.playerInfo;

  if (!playerInfo) {
    return _react2.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    }, "fetching player info ...");
  }
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, playerInfo.displayFirstLast), _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "born: ", playerInfo.birthdate.slice(0, 4)), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "years in NBA: ", playerInfo.seasonExp), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "drafted ", playerInfo.draftYear, ", pick ", playerInfo.draftNumber, " in round ", playerInfo.draftRound), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "height: ", playerInfo.height), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "weight: ", playerInfo.weight), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "position: ", playerInfo.position)));
}

exports.default = PlayerCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyX2NhcmQuanMiXSwibmFtZXMiOlsiUGxheWVyQ2FyZCIsInBsYXllckluZm8iLCJkaXNwbGF5Rmlyc3RMYXN0IiwiYmlydGhkYXRlIiwic2xpY2UiLCJzZWFzb25FeHAiLCJkcmFmdFllYXIiLCJkcmFmdE51bWJlciIsImRyYWZ0Um91bmQiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFBLEFBQVMsaUJBQTJCO01BQWQsQUFBYyxrQkFBZCxBQUFjLEFBQ2xDOztNQUFJLENBQUosQUFBSyxZQUFZLEFBQ2Y7MkJBQU8sY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLEtBQUEsRUFBUCxBQUFPLEFBQ1I7QUFDRDt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLGdCQURGLEFBQ0UsQUFBZ0IsQUFDaEIsbUNBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQVcscUJBQUEsQUFBVyxVQUFYLEFBQXFCLE1BQXJCLEFBQTJCLEdBRHhDLEFBQ0UsQUFBVyxBQUE4QixBQUN6QyxxQkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBbUIsNkJBRnJCLEFBRUUsQUFBOEIsQUFDOUIsNEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQWEsdUJBQWIsQUFBd0IsV0FBa0Isc0JBQTFDLEFBQXFELGFBQXVCLHlCQUg5RSxBQUdFLEFBQXVGLEFBQ3ZGLDZCQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUFhLHVCQUpmLEFBSUUsQUFBd0IsQUFDeEIseUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQWEsdUJBTGYsQUFLRSxBQUF3QixBQUN4Qix5QkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBZSx5QkFUckIsQUFDRSxBQUVFLEFBTUUsQUFBMEIsQUFJakM7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJwbGF5ZXJfY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jaHJpcy9Eb2N1bWVudHMvbmJhLWxpbmV1cCJ9