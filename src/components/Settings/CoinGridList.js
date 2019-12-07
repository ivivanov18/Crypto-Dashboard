import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import { Tile, SelectableTile } from '../Shared/Tile';

const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;

function CoinGridList() {
	return (
		<CoinGridStyled>
			<AppContext.Consumer>
				{({ coinList }) =>
					Object.keys(coinList).map(coinKey => (
						<SelectableTile>{coinKey}</SelectableTile>
					))
				}
			</AppContext.Consumer>
		</CoinGridStyled>
	);
}
export default CoinGridList;
