import React, { Component } from 'react';
import {keys,
	setLocalStore,
	getLocalStore} from '../../services/storage'
import {editRow} from '../../services/MapData'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Edit extends Component {

	constructor(props) {
		super(props);	
		let store = getLocalStore(keys.notes);
		let id = this.props.match.params.id;
		let index = editRow(id);
		let note = store[index];
	
	this.state = {
	store: store,
	index: index,
	id: note.id,
	title: note.title,
	details: note.details}
	}
	
	OnChangeTitle(event){
	this.setState({
	title: event.target.value
	
	})
	}
	onChangeDetails(event){
	this.setState({
	details: event.target.value
	})
	}
	onSubmit(event){
	event.preventDefault();
	if(this.state.title ==='' || this.state.details === '') return;
	let newNote = {id: this.state.id,
			title: this.state.title,
			details: this.state.details}

	let store = this.state.store;
	let index = this.state.index; 
	store.splice(index, 1, newNote);
	setLocalStore(keys.notes, store);
	this.props.history.push('/')
	}
	CancelEdit(e){
		e.preventDefault();
		this.props.history.push('/');
	}
	render() {
		return (
			<div>
					<Form onSubmit={this.onSubmit.bind(this)}>
						<fieldset>
							
							<legend>Edit Note: </legend>
							<FormGroup row>
							<Label  sm={2}>Title</Label>
							<Col  sm={10}>
							<Input value={this.state.title} onChange={this.OnChangeTitle.bind(this)}/>
							</Col>
							</FormGroup>
							<FormGroup row>
							<Label  sm={2}>Deails</Label>
							<Col  sm={10}>
							<Input value={this.state.details} onChange={this.onChangeDetails.bind(this)}/>
							</Col>
							</FormGroup>
							
						</fieldset>
					<Button type='submit'>Edit</Button>
					<Button onClick={this.CancelEdit.bind(this)} type='reset'>Cancel</Button>
					</Form>
			</div>
		);
	}
}

export default Edit;
