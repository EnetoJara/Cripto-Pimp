import React from 'react';
import AppContext from '../../../container/AppContext';

const Welcome = () => (
	<AppContext.Consumer>
		{({ firstVisit }) =>
			firstVisit ? (
				<div>
					Welcome to CryptoDash, please select your favorite coins to begin.{' '}
				</div>
			) : null
		}
	</AppContext.Consumer>
);

export default Welcome;
