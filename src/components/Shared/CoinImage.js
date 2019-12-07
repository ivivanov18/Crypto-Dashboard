import React from 'react';

function CoinImage({ coin, style }) {
	return (
		<img
			alt={coin.Symbol}
			style={style || { height: '50px' }}
			src={`http://cryptocompare.com${coin.ImageUrl}`}
		/>
	);
}

export default CoinImage;
