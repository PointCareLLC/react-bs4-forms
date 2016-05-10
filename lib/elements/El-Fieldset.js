'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Fieldset',

    propTypes: {
        valid: _react2.default.PropTypes.bool
    },
    render: render
});


function render() {
    return _react2.default.createElement(
        'fieldset',
        { className: getClass(this.props.valid) },
        this.props.children
    );
}

function getClass(valid) {
    switch (valid) {

        case true:
            return 'form-group has-success';

        case false:
            return 'form-group has-danger';

        default:
            return 'form-group';
    }
}