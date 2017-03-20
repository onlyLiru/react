'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Picker = require('./Picker.web');

var _Picker2 = _interopRequireDefault(_Picker);

var _MultiPickerMixin = require('./MultiPickerMixin');

var _MultiPickerMixin2 = _interopRequireDefault(_MultiPickerMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MultiPicker = _react2["default"].createClass({
    displayName: 'MultiPicker',

    mixins: [_MultiPickerMixin2["default"]],
    render: function render() {
        var _this = this;

        var props = this.props;
        var prefixCls = props.prefixCls,
            pickerPrefixCls = props.pickerPrefixCls,
            className = props.className,
            rootNativeProps = props.rootNativeProps,
            disabled = props.disabled,
            pickerItemStyle = props.pickerItemStyle,
            indicatorStyle = props.indicatorStyle,
            pure = props.pure,
            children = props.children;

        var selectedValue = this.getValue();
        var colElements = children.map(function (col, i) {
            return _react2["default"].createElement(
                'div',
                { key: col.key || i, className: prefixCls + '-item' },
                _react2["default"].createElement(_Picker2["default"], (0, _extends3["default"])({ itemStyle: pickerItemStyle, disabled: disabled, pure: pure, indicatorStyle: indicatorStyle, prefixCls: pickerPrefixCls, selectedValue: selectedValue[i], onValueChange: _this.onValueChange.bind(_this, i) }, col.props))
            );
        });
        return _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, rootNativeProps, { className: (0, _classnames2["default"])(className, prefixCls) }),
            colElements
        );
    }
});
exports["default"] = MultiPicker;
module.exports = exports['default'];