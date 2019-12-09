import React from 'react';
import ReactHighcharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../AppProvider';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

function PriceChart() {
	return (
		<AppContext.Consumer>
			{({ historical, changeChartSelect, timeInterval }) =>
				historical ? (
					<Tile>
						<ChartSelect
							value={timeInterval}
							onChange={e => changeChartSelect(e.target.value)}>
							<option value='days'>Days</option>
							<option value='weeks'>Weeks</option>
							<option value='weeks'>Months</option>
						</ChartSelect>
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
