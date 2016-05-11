'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Textarea',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired
    },
    render: render,
    getDefaultProps: getDefaultProps,
    handleChange: handleChange
});


function render() {
    return _react2.default.createElement('textarea', (0, _extends3.default)({
        id: this.props.name
    }, this.props, {
        ref: 'el',
        onUpdate: undefined,
        onChange: this.handleChange
    }));
}

function getDefaultProps() {
    return {
        rows: '3',
        disabled: false,
        className: 'form-control'
    };
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value);
}