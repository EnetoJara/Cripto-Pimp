import React from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Page';
import CoinGrid from './CointGrid';

const Settings = () => (
	<Page name="settings">
		<Welcome message="Welcome to CryptoEneto" />
		<ConfirmButton />
		<CoinGrid />
	</Page>
);

export default Settings;
