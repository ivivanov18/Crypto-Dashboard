import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';

const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

const Button = styled.div`
	margin: 20px;
	cursor: pointer;
	color: green;
`;

function ConfirmButton() {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenterDiv>
					<Button onClick={confirmFavorites}>Confirm Favorites</Button>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
}
export default ConfirmButton;
