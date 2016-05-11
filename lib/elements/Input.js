"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "Input",

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired
    },
    render: render,
    handleChange: handleChange
});


function render() {
    var _props = this.props;
    var onUpdate = _props.onUpdate;
    var inputProps = (0, _objectWithoutProperties3.default)(_props, ["onUpdate"]);


    return _react2.default.createElement("input", (0, _extends3.default)({
        id: inputProps.name,
        type: "text",
        className: "form-control"
    }, inputProps, {
        ref: "el",
        onChange: this.handleChange
    }));
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value);
}