import React, { Component } from 'react';

import LayoutStyled from './LayoutStyles';
import Appbar from '../../components/Appbar';
import AppProvider from '../../components/Provider';
import Settings from '../../components/Settings';
import Content from '../../components/Content';

class Layout extends Component {
	render() {
		return (
			<LayoutStyled>
				<AppProvider>
					<Appbar />
					<Content>
						<Settings />
					</Content>
				</AppProvider>
			</LayoutStyled>
		);
	}
}

export default Layout;
