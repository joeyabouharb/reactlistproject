import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap'




const Header = function(props) {
	
	return(
		
		
	<div>
		<header>
		<div className="d-flex justify-content-center">
			<h2>List Creator</h2>
			</div>
		</header>
		
			
	
		<div className="d-flex justify-content-around">
			
			<Button color='link'><Link to='/'>Home</Link></Button>

			<Button color='link'><Link to='/add'>Add Item</Link></Button>

			<div>
			
			<Button color='link' onClick={props.deleteLocalStore.bind(this)}><Link to='/'>DeleteDB</Link></Button>
			
				
			</div>
			
		</div>
		
</div>
);

	
};
export default Header;

