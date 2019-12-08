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
				{({ prices, currentFavorite, setCurrentFavorite }) =>
					prices.map((price, index) => (
						<PriceTile
							price={price}
							index={index}
							currentFavorite={currentFavorite}
							setCurrentFavorite={setCurrentFavorite}
						/>
					))
				}
			</AppContext.Consumer>
		</PriceGridStyled>
	);
}
export default PriceGrid;
