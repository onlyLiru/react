'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var textStyle = {
    color: '#0ae',
    fontSize: 18,
    textAlign: 'center'
};
var styles = _reactNative.StyleSheet.create({
    modal: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    header: {
        // flex:1, 0.39.0 needs to remove
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7'
    },
    headerItem: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    actionText: textStyle,
    title: (0, _objectAssign2["default"])({}, textStyle, {
        color: '#666'
    })
});
exports["default"] = styles;
module.exports = exports['default'];