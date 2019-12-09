import React from 'react';
import ReactHighcharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../AppProvider';
import HighchartsTheme from './HighchartsTheme';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

function PriceChart() {
	return (
		<AppContext.Consumer>
			{({ historical }) =>
				historical ? (
					<Tile>
						<ReactHighcharts config={highchartsConfig(historical)} />
					</Tile>
				) : (
					<div>Loading data</div>
				)
			}
		</AppContext.Consumer>
	);
}

export default PriceChart;
