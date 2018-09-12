import React, { Component } from 'react';
import './App.css';
import Header from './components/shared/header';
import Router from './components/router';
import {Container} from 'reactstrap' 
import {keys} from './services/storage'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rerender: false
    }
  }
	deleteLocalStore(){
		localStorage.removeItem(keys.id);
		localStorage.removeItem(keys.notes);
    alert("deleted database")
    //trigger a re-render of the page by calling setState (container key)
   this.setState({
      rerender: !this.state.rerender
    })
 
  }
  render() {
   

    return (
    
      <Container key={this.state.rerender}>
	      <Header deleteLocalStore={this.deleteLocalStore.bind(this)}/>
	      <Router/>
        </Container>
    
  
    );
  }
}

export default App;
