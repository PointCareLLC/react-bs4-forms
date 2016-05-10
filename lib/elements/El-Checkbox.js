'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Checkbox',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        value: _react2.default.PropTypes.string.isRequired,
        checked: _react2.default.PropTypes.bool,
        disabled: _react2.default.PropTypes.bool
    },
    render: render,
    handleChange: handleChange
});


function render() {

    var props = {
        id: this.props.name,
        name: this.props.name,
        type: 'checkbox',
        checked: this.props.checked,
        disabled: this.props.disabled,
        onChange: this.handleChange
    };

    return _react2.default.createElement(
        'label',
        { className: 'c-input c-checkbox' },
        _react2.default.createElement('input', props),
        _react2.default.createElement('span', { className: 'c-indicator' }),
        this.props.text
    );
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.props.value);
}