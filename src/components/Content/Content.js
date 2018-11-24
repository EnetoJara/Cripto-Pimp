import React from 'react';

import AppContext from '../../container/AppContext';

const Content = props => {
	return (
		<AppContext.Consumer>
			{({ coinsList }) => {
				if (!coinsList) {
					return <div>Loading Coins...</div>;
				} else {
					return <div>{props.children}</div>;
				}
			}}
		</AppContext.Consumer>
	);
};

export default Content;
