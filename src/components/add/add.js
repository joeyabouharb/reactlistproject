import React, { Component } from 'react';
import {getLocalStore,
	setLocalStore,
	keys} from '../../services/storage';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Add extends Component {

constructor(props){
	super(props);

	let store = getLocalStore(keys.notes);
	let id = getLocalStore(keys.id);
	if(!store){
	store = []
	}
	if(!id){
	id = 0
	}
	
	this.state = {
		id: id ,
		title: '',
		details: '',
		notes: store

	}
}	



	onChangeTitle(event){
	this.setState({
	title: event.target.value
	})

	}

	onChangeDetails(event){
	this.setState({
	details: event.target.value
	})

	}

	onSubmitForm(event){
	event.preventDefault();

	if(this.state.title === '' || this.state.details === ''){
	return;
	}
	let id = this.state.id;
	let title = this.state.title;
	let details = this.state.details;
	let note = {
	id: id,
	title: title,
	details: details
	}
	let notes = this.state.notes;
	notes.push(note);

	setLocalStore(keys.notes, notes);
	setLocalStore(keys.id, id);

	this.props.history.push('/')

	}

	IdCounter(){
		if(this.state.title === '' || this.state.details === ''){
			return;
		}
		this.setState({
			id: this.state.id + 1
		})
	}
	resetPage(e){
		e.preventDefault();
		this.setState({
			title: '',
			details: ''
		})
	}
	render() {
		return(
			<div>
				<Form onSubmit={this.onSubmitForm.bind(this)}>
					<fieldset>
						<legend>Add Note</legend>
						<FormGroup row>
						
							<Label sm={2}>Title</Label>
							<Col sm={10}>
							<Input value={this.state.title} onChange={this.onChangeTitle.bind(this)}/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label sm={2}>details</Label>
							<Col sm={10}>
							<Input value={this.state.details} onChange={this.onChangeDetails.bind(this)}/>
							</Col>
						</FormGroup>
					</fieldset>
				
					<Button onClick={this.IdCounter.bind(this)} type='submit'>Add</Button>
					<Button onClick={this.resetPage.bind(this)} type='reset'>Reset</Button>
				</Form>
			</div>
		);
	}
}

export default Add;
