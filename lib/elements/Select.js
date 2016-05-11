'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Select',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        placeholder: _react2.default.PropTypes.string,
        value: _react2.default.PropTypes.string
    },
    render: render,
    handleChange: handleChange
});


function render() {
    var _props = this.props;
    var onUpdate = _props.onUpdate;
    var placeholder = _props.placeholder;
    var options = _props.options;
    var selectProps = (0, _objectWithoutProperties3.default)(_props, ['onUpdate', 'placeholder', 'options']);


    return _react2.default.createElement(
        'select',
        (0, _extends3.default)({
            id: this.props.name,
            className: 'form-control c-select'
        }, selectProps, {
            ref: 'el',
            onChange: this.handleChange }),
        _react2.default.createElement(
            'option',
            { value: '' },
            this.props.placeholder || 'Select Option'
        ),
        this.props.options.map(function (item) {
            return _react2.default.createElement(
                'option',
                {
                    key: item.value,
                    value: item.value },
                item.text
            );
        })
    );
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value);
}