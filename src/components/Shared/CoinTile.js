import React from 'react';
import { SelectableTile } from './Tile';
import { AppContext } from '../AppProvider';
import CoinHeaderGrid from '../Shared/CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

function CoinTile({ coinKey }) {
	return (
		<AppContext.Consumer>
			{({ coinList }) => {
				const coin = coinList[coinKey];
				const TileClass = SelectableTile;
				return (
					<TileClass>
						<CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
						<CoinImage coin={coin} />
					</TileClass>
				);
			}}
		</AppContext.Consumer>
	);
}

export default CoinTile;
