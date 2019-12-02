import React from 'react';
import styled from 'styled-components';
import WelcomeMessage from './WelcomeMessage';
import { AppContext } from '../AppProvider';

const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

const ConfirmButton = styled.div`
	margin: 20px;
	cursor: pointer;
	color: green;
`;

export default function() {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenterDiv>
					<WelcomeMessage />
					<ConfirmButton onClick={confirmFavorites}>
						Confirm Favorites
					</ConfirmButton>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
}
