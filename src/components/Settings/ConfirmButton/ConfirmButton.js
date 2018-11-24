import React from 'react';
import styled from 'styled-components';

import AppContext from '../../../container/AppContext';

const ConfirmButtonStyled = styled.div`
	margin: 1.5rem;
	color: green;
	cursor: pointer;
`;

const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;
const ConfirmButton = () => (
	<AppContext.Consumer>
		{({ confirmFavorites }) => (
			<CenterDiv>
				<ConfirmButtonStyled role="button" onClick={() => confirmFavorites()}>
					Confirm Favorites
				</ConfirmButtonStyled>
			</CenterDiv>
		)}
	</AppContext.Consumer>
);

export default ConfirmButton;
