'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'El-Label',

    propTypes: {
        id: _react2.default.PropTypes.string,
        text: _react2.default.PropTypes.string.isRequired,
        required: _react2.default.PropTypes.bool
    },
    render: render
});


function render() {
    return _react2.default.createElement(
        'label',
        { htmlFor: this.props.id, className: 'form-control-label' },
        this.props.text,
        ' ',
        this.props.required ? '*' : undefined
    );
}