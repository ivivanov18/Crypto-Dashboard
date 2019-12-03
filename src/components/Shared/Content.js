import React from 'react';
import { AppContext } from '../AppProvider';

function Content({ children }) {
	return (
		<AppContext.Consumer>
			{({ coinList }) =>
				!coinList ? <div>Loading coins</div> : <div>{children}</div>
			}
		</AppContext.Consumer>
	);
}
export default Content;
