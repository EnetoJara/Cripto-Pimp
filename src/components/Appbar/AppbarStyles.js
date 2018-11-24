import React from 'react';
import styled, { css } from 'styled-components';

import AppContext from '../../container/AppContext';

export const Logo = styled.div`
	font-size: 2rem;
`;

export const Bar = styled.div`
	display: grid;
	grid-template-columns: 11.25rem auto 6.25rem 6.25rem;
	margin-bottom: 2.5rem;
`;

export const ControlButtonElem = styled.div`
	cursor: pointer;
	text-transform: capitalize;
	${props =>
		props.active &&
		css`
			text-shadow: 0px 0px 2.1rem #03ff03;
		`}
`;

export const ControlButtom = ({ name }) => (
	<AppContext.Consumer>
		{({ page, setPage }) => (
			<ControlButtonElem onClick={() => setPage(name)} active={page === name}>
				{name}
			</ControlButtonElem>
		)}
	</AppContext.Consumer>
);
