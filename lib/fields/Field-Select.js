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

var _ElSelect = require('../elements/Select.jsx');

var _ElSelect2 = _interopRequireDefault(_ElSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Select',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        label: _react2.default.PropTypes.string.isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        placeholder: _react2.default.PropTypes.string,
        value: _react2.default.PropTypes.string,
        disabled: _react2.default.PropTypes.bool,
        valid: _react2.default.PropTypes.bool
    },
    render: render,
    shouldComponentUpdate: shouldComponentUpdate
});


function render() {

    var selectProps = {
        id: this.props.name,
        name: this.props.name,
        onUpdate: this.props.onUpdate,
        options: this.props.options,
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled
    };

    return _react2.default.createElement(
        _ElFieldset2.default,
        { valid: this.props.valid },
        _react2.default.createElement(_ElLabel2.default, { id: this.props.name, text: this.props.label, required: this.props.required }),
        _react2.default.createElement(_ElSelect2.default, selectProps)
    );
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
}