
jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Hoc from '../input-mask-hoc';
import InputEl from '../../elements/Input';

describe('validated-field-hoc', () => {

	var Input = null;
	var props = null;
	var updateName = null;
	var updateValue = null;

	beforeEach(function() {

		Input = Hoc(InputEl);

		props = {
			name: 'phone',
			value: '1234567890',
			mask: '(999) 999-9999',
			onUpdate: (name, value) => {
				updateName = name;
				updateValue = value;
			}
		};

		updateName = null;
		updateValue = null;
	});

	describe('render', function() {

		it('should have expected id', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.id).toEqual('phone');
		});
	});

	describe('onUpdate from change', function() {

		beforeEach(function() {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			TestUtils.Simulate.change(inputNode);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('(123) 456-7890');
		});
	});
});
