'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Fieldset = require('../elements/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _Textarea = require('../elements/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Textarea',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        label: _react2.default.PropTypes.string.isRequired,
        value: _react2.default.PropTypes.string,
        valid: _react2.default.PropTypes.bool
    },
    render: render,
    shouldComponentUpdate: shouldComponentUpdate
});


function render() {
    var _props = this.props;
    var label = _props.label;
    var valid = _props.valid;
    var elProps = (0, _objectWithoutProperties3.default)(_props, ['label', 'valid']);


    return _react2.default.createElement(
        _Fieldset2.default,
        { valid: this.props.valid },
        _react2.default.createElement(_Label2.default, {
            id: this.props.id || this.props.name,
            text: this.props.label,
            required: this.props.required
        }),
        _react2.default.createElement(_Textarea2.default, elProps)
    );
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
}