
jest.unmock('../validated-field-hoc');
jest.unmock('../../elements/Input');
jest.unmock('../../helpers/validation');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Hoc from '../validated-field-hoc';
import InputEl from '../../elements/Input';

describe('validated-field-hoc', () => {

	var Input = null;
	var props = null;
	var updateName = null;
	var updateValue = null;
	var updateValid = null;

	beforeEach(function() {

		Input = Hoc(InputEl);

		props = {
			name: 'ssn',
			onUpdate: (name, value, valid) => {
				updateName = name;
				updateValue = value;
				updateValid = valid;
			}
		};
	});

	describe('render', function() {

		it('should have expected id', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.id).toEqual('ssn');
		});
	});

	describe('onUpdate with prop.value', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value="123456789" />
			);
		});

		it('should give expected value', function() {
			expect(updateValue).toEqual('123456789');
		});

		it('should give expected valid state', function() {
			expect(updateValid).toEqual(true);
		});
	});

	describe('onUpdate with prop.value is undefined', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value={undefined} />
			);
		});

		it('should give expected value', function() {
			expect(updateValue).toEqual(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toEqual(true);
		});
	});

	describe('onUpdate with prop.value is undefined & prop.required is true', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} required={true} value={undefined} />
			);
		});

		it('should give expected value', function() {
			expect(updateValue).toEqual(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toEqual(false);
		});
	});

	describe('onUpdate with prop.validator that returns true', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value="123-456-7890" validator={() => true} />
			);
		});

		it('should give expected value', function() {
			expect(updateValue).toEqual('123-456-7890');
		});

		it('should give expected valid state', function() {
			expect(updateValid).toEqual(true);
		});
	});

	describe('onUpdate with prop.validator that returns false', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value="123-456-7890" validator={() => false} />
			);
		});

		it('should give expected value', function() {
			expect(updateValue).toEqual('123-456-7890');
		});

		it('should give expected valid state', function() {
			expect(updateValid).toEqual(false);
		});
	});
});
