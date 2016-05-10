'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ElLabel = require('../elements/Label.jsx');

var _ElLabel2 = _interopRequireDefault(_ElLabel);

var _ElFieldset = require('../elements/Fieldset.jsx');

var _ElFieldset2 = _interopRequireDefault(_ElFieldset);

var _ElTextarea = require('../elements/Textarea.jsx');

var _ElTextarea2 = _interopRequireDefault(_ElTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Textarea',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        label: _react2.default.PropTypes.string.isRequired,
        rows: _react2.default.PropTypes.string,
        placeholder: _react2.default.PropTypes.string,
        value: _react2.default.PropTypes.string,
        disabled: _react2.default.PropTypes.bool,
        valid: _react2.default.PropTypes.bool
    },
    render: render,
    shouldComponentUpdate: shouldComponentUpdate
});


function render() {

    var textareaProps = {
        id: this.props.name,
        name: this.props.name,
        onUpdate: this.props.onUpdate,
        rows: this.props.rows,
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled
    };

    return _react2.default.createElement(
        _ElFieldset2.default,
        { valid: this.props.valid },
        _react2.default.createElement(_ElLabel2.default, { id: this.props.name, text: this.props.label, required: this.props.required }),
        _react2.default.createElement(_ElTextarea2.default, textareaProps)
    );
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
}