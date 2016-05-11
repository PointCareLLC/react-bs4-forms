"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "Checkbox",

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        value: _react2.default.PropTypes.string.isRequired,
        text: _react2.default.PropTypes.string.isRequired
    },
    render: render,
    handleChange: handleChange,
    getDefaultProps: getDefaultProps
});


function render() {
    return _react2.default.createElement(
        "label",
        { className: "c-input c-checkbox" },
        _react2.default.createElement("input", (0, _extends3.default)({
            id: this.props.name
        }, this.props, {
            onUpdate: undefined,
            onChange: this.handleChange
        })),
        _react2.default.createElement("span", { className: "c-indicator" }),
        this.props.text
    );
}

function getDefaultProps() {
    return {
        type: 'checkbox'
    };
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.props.value);
}