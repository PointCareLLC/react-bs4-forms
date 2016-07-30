
import './style/index.scss';
import '../../src/style/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import FormView from './Form-View.jsx';

ReactDOM.render(
	<div className="container">
		<div className="row">
			<div className="col-md-8 offset-md-2">
				<h4>react-bs4-forms</h4>
				<hr />
				<div className="bs4-forms">
					<FormView />
				</div>
			</div>
		</div>
	</div>,
	document.getElementById('root')
);
