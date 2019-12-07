import React from 'react';
import { SelectableTile } from './Tile';
import { AppContext } from '../AppProvider';
import CoinHeaderGrid from '../Shared/CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';
import { DeletableTile } from '../Shared/Tile';

function CoinTile({ coinKey, topSection }) {
	return (
		<AppContext.Consumer>
			{({ coinList }) => {
				const coin = coinList[coinKey];
				let TileClass = SelectableTile;
				if (topSection) {
					TileClass = DeletableTile;
				}
				return (
					<TileClass>
						<CoinHeaderGrid
							topSection={topSection}
							name={coin.CoinName}
							symbol={coin.Symbol}
						/>
						<CoinImage coin={coin} />
					</TileClass>
				);
			}}
		</AppContext.Consumer>
	);
}

export default CoinTile;
