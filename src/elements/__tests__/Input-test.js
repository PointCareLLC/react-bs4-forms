jest.unmock('../Input');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Input from '../Input';

describe('fields/Input', () => {

	var props = null;
	var updateName = null;
	var updateValue = null;

	beforeEach(function() {
		props = {
			name: 'firstName',
			onUpdate: (name, value) => {
				updateName = name;
				updateValue = value;
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

		it('should have expected valie if given prop.value', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} value='Billy' />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.value).toEqual('Billy');
		});
	});
});
