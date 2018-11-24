import React from 'react';
import { Bar, Logo, ControlButtom } from './AppbarStyles';

const Appbar = () => {
	return (
		<Bar>
			<Logo>CriptoDash</Logo>
			<div />
			<ControlButtom name="dashboard" />
			<ControlButtom name="settings" />
		</Bar>
	);
};

export default Appbar;
