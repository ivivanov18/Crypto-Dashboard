import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';

const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
`;

function CoinGridList() {
	return (
		<CoinGridStyled>
			<AppContext.Consumer>
				{({ coinList }) =>
					Object.keys(coinList).map(coinKey => <div>{coinKey}</div>)
				}
			</AppContext.Consumer>
		</CoinGridStyled>
	);
}
export default CoinGridList;
