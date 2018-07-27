jest.unmock('../Input');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Input from '../Input';

describe('fields/Input', () => {

	var props = null;
	var updateName = null;
	var updateValue = null;
	var updateEvent = null;

	beforeEach(function() {
		props = {
			name: 'firstName',
			onUpdate: (name, value, event) => {
				updateName = name;
				updateValue = value;
				updateEvent = event;
			},
			size: undefined
		};
	});

	describe('Rendering', function() {

		it('should have expected id', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.id).toEqual('firstName');
		});

		it('should have expected class if prop.valid is undefined', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.className).toEqual('form-control');
		});

		it('should have expected class if prop.valid is true', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} valid={true} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.className).toEqual('form-control form-control-success');
		});

		it('should have expected class if prop.valid is false', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} valid={false} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.className).toEqual('form-control form-control-danger');
		});

		it('should have expected value if given prop.value', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} value='Billy' />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.value).toEqual('Billy');
		});

		it('should have expected value "on" if given prop.autoComplete is set to "on"', () => {

			var addedProp = { ...props, autoComplete: 'on' };
			var input = TestUtils.renderIntoDocument(
				<Input {...addedProp} />
			);

			var inputNode = ReactDOM.findDOMNode(input);
			expect(inputNode.getAttribute('autoComplete')).toEqual('on');
		});
	});

	describe('onUpdate', function() {

		var input = null;
		var inputNode = null;

		beforeEach(function() {
			input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			inputNode = ReactDOM.findDOMNode(input);
			inputNode.value = 'Billy';
			TestUtils.Simulate.change(inputNode);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('firstName');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('Billy');
		});

		it('should give expected event as object', function() {
			expect(typeof updateEvent).toBe('object');
		});
	});
});
