import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Add from './add/add';
import Edit from './edit/edit';
import Home from './home/home';

const Router = function () {
	return(
	<Switch>
		<Route path='/' exact component={Home}/>
		<Route path='/add' component={Add}/>
		<Route path='/edit/:id' component={Edit}/>
	
	</Switch>
	);
};
export default Router;
