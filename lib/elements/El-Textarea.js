'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'El-Textarea',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        rows: _react2.default.PropTypes.string,
        placeholder: _react2.default.PropTypes.string,
        value: _react2.default.PropTypes.string,
        disabled: _react2.default.PropTypes.bool
    },
    render: render,
    getDefaultProps: getDefaultProps,
    handleChange: handleChange
});


function render() {

    var props = {
        ref: 'el',
        id: this.props.name,
        name: this.props.name,
        rows: this.props.rows,
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled,
        className: 'form-control'
    };

    return _react2.default.createElement('textarea', _extends({}, props, { onChange: this.handleChange }));
}

function getDefaultProps() {
    return {
        value: '',
        rows: '3',
        disabled: false
    };
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value);
}