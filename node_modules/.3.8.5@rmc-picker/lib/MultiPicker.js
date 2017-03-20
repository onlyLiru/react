'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _MultiPickerMixin = require('./MultiPickerMixin');

var _MultiPickerMixin2 = _interopRequireDefault(_MultiPickerMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
    item: {
        flex: 1
    },
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});
var MultiPicker = _react2["default"].createClass({
    displayName: 'MultiPicker',

    mixins: [_MultiPickerMixin2["default"]],
    render: function render() {
        var _this = this;

        var props = this.props;
        var disabled = props.disabled,
            pickerItemStyle = props.pickerItemStyle,
            pure = props.pure,
            children = props.children,
            style = props.style;

        var selectedValue = this.getValue();
        var colElements = children.map(function (col, i) {
            return _react2["default"].createElement(
                _reactNative.View,
                { key: col.key || i, style: styles.item },
                _react2["default"].createElement(_Picker2["default"], (0, _extends3["default"])({ itemStyle: pickerItemStyle, disabled: disabled, pure: pure, selectedValue: selectedValue[i], onValueChange: _this.onValueChange.bind(_this, i) }, col.props))
            );
        });
        return _react2["default"].createElement(
            _reactNative.View,
            { style: [styles.root, style] },
            colElements
        );
    }
});
exports["default"] = MultiPicker;
module.exports = exports['default'];