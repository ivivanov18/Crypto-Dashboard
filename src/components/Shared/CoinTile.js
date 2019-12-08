import React from 'react';
import { SelectableTile } from './Tile';
import { AppContext } from '../AppProvider';
import CoinHeaderGrid from '../Shared/CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';
import { DeletableTile, DisabledTile } from '../Shared/Tile';

function getClickCallback(topSection, coinKey, addCoin, removeCoin) {
	return topSection
		? () => {
				removeCoin(coinKey);
		  }
		: () => {
				addCoin(coinKey);
		  };
}

function CoinTile({ coinKey, topSection }) {
	return (
		<AppContext.Consumer>
			{({
				coinList,
				addCoinToFavorites,
				removeCoinFromFavorites,
				isInFavorites,
			}) => {
				const coin = coinList[coinKey];
				let TileClass = SelectableTile;
				if (topSection) {
					TileClass = DeletableTile;
				} else if (isInFavorites(coinKey)) {
					TileClass = DisabledTile;
				}

				return (
					<TileClass
						onClick={getClickCallback(
							topSection,
							coinKey,
							addCoinToFavorites,
							removeCoinFromFavorites
						)}>
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
