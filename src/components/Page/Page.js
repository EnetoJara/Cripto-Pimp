import React from 'react';
import AppContext from '../../container/AppContext';

const Page = ({ name, children }) => (
	<AppContext.Consumer>
		{({ page }) => {
			if (page !== name) {
				return null;
			}
			return <div>{children}</div>;
		}}
	</AppContext.Consumer>
);

export default Page;
