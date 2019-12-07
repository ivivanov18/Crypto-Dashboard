import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

const Button = styled.div`
	margin: 20px;
	cursor: pointer;
	padding: 10px;
	color: ${color3};
	${fontSize1}
	&:hover {
		${greenBoxShadow}
	}
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
