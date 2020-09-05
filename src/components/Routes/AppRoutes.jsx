import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tasks from '../Pages/Tasks';

const AppRoutes = () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Tasks} />
			<Route component={() => <h>Pagina de error</h>} />
		</Switch>
	</Router>
);

export default AppRoutes;
