import React from 'react';
import styled from 'styled-components';

import AppContext from '../../../container/AppContext';

const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
`;

export default () => (
	<AppContext.Consumer>
		{({ coinsList }) => (
			<CoinGridStyled>
				{Object.keys(coinsList).map(coinKey => (
					<div>{coinKey}</div>
				))}
			</CoinGridStyled>
		)}
	</AppContext.Consumer>
);
