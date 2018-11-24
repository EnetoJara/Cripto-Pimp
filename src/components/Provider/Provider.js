import React, { Component } from 'react';
import cc from 'cryptocompare';

import AppContext from '../../container/AppContext';
class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'settings',
			...this.savedSettings(),
			setPage: this.setPage,
			confirmFavorites: this.confirmFavorites
		};
	}

	componentDidMount = () => {
		this.fetchCoins();
	};

	fetchCoins = async () => {
		const coinsList = (await cc.coinList()).Data;
		this.setState({ coinsList });
	};

	confirmFavorites = () => {
		this.setState({ firstVisit: false, page: 'dashboard' });
		localStorage.setItem('enetoCryptoDash', JSON.stringify({ pimp: 'Eneto' }));
	};

	savedSettings = () => {
		return !JSON.parse(localStorage.getItem('enetoCryptoDash'))
			? { page: 'settings', firstVisit: true }
			: { firstVisit: false };
	};

	setPage = page => this.setState({ page });

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

export default AppProvider;
