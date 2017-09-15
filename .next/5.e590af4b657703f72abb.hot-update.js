webpackHotUpdate(5,{

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(27);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/chris/Documents/nba-lineup/components/player_card.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/chris/Documents/nba-lineup/components/player_card.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNTkwYWY0YjY1NzcwM2Y3MmFiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXJfY2FyZC5qcz9jNWIzMzQxIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBsYXllckNhcmQoeyBwbGF5ZXJJbmZvIH0pIHtcbiAgaWYgKCFwbGF5ZXJJbmZvKSB7XG4gICAgcmV0dXJuIDxkaXY+ZmV0Y2hpbmcgcGxheWVyIGluZm8gLi4uPC9kaXY+XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntwbGF5ZXJJbmZvLmRpc3BsYXlGaXJzdExhc3R9PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPmJvcm46IHtwbGF5ZXJJbmZvLmJpcnRoZGF0ZS5zbGljZSgwLCA0KX08L2xpPlxuICAgICAgICA8bGk+eWVhcnMgaW4gTkJBOiB7cGxheWVySW5mby5zZWFzb25FeHB9PC9saT5cbiAgICAgICAgPGxpPmRyYWZ0ZWQge3BsYXllckluZm8uZHJhZnRZZWFyfSwgcGljayB7cGxheWVySW5mby5kcmFmdE51bWJlcn0gaW4gcm91bmQge3BsYXllckluZm8uZHJhZnRSb3VuZH08L2xpPlxuICAgICAgICA8bGk+aGVpZ2h0OiB7cGxheWVySW5mby5oZWlnaHR9PC9saT5cbiAgICAgICAgPGxpPndlaWdodDoge3BsYXllckluZm8ud2VpZ2h0fTwvbGk+XG4gICAgICAgIDxsaT5wb3NpdGlvbjoge3BsYXllckluZm8ucG9zaXRpb259PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ2FyZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGxheWVyX2NhcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==