import React, { Component } from 'react';
import {Row, UpdateOnDeleteRow} from '../../services/MapData';
import {keys, getLocalStore} from "../../services/storage";
import { Table } from 'reactstrap';

class Home extends Component {
constructor(props){
	super(props);
	//ger current storage data and set props
	let store = getLocalStore(keys.notes);
	if(!store){
		store = []
	}
	this.state = {
		notes: store
	}
}
	DeleteItem(id) {
		//on delete, update storage
	let store = UpdateOnDeleteRow(id);
	if(!store){
		store = [];
	}
	this.setState({
		notes: store
	})
	}
	render() {
		return (
			<div>
				<Table dark>
					<thead>
						<tr>
							<th>Title</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{this.state.notes.map((item) => 
					<Row 
					DeleteItem={this.DeleteItem.bind(this)}
					 item={item} 
					 key={item.id}/>
						)}

					</tbody>
				</Table>
			</div>
		);
	}
}


export default Home;
