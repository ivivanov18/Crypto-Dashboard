import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import PriceTile from './PriceTile';

const PriceGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

function PriceGrid() {
	return (
		<PriceGridStyled>
			<AppContext.Consumer>
				{({ prices }) =>
					prices.map((price, index) => (
						<PriceTile price={price} index={index} />
					))
				}
			</AppContext.Consumer>
		</PriceGridStyled>
	);
}
export default PriceGrid;
