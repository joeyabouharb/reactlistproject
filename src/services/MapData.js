import React from 'react';
import {keys,
		getLocalStore,
        setLocalStore} from './storage';
import {Link} from 'react-router-dom'


export function Row(props){
    
    let note = props.item;
   let dataNode =(<tr>
    
        <td>
            {note.title}
        </td>
        <td>
            {note.details}
        </td>
	<td><button className='btn btn-danger' onClick={props.DeleteItem.bind(this, note.id)}>Delete</button>
	<Link to={`/edit/${note.id}`}>	<button className='btn btn-light' >Edit</button></Link>
						</td>
    </tr>
   )
    return dataNode;
    
    }


   export function UpdateOnDeleteRow(id){
        let store = getLocalStore(keys.notes);
      
        let idList = store.map((note) => {return note.id}).indexOf(id)
       
        store.splice(idList, 1);
        setLocalStore(keys.notes, store);
        return store;
        
    }

    export function editRow(id){
        let store = getLocalStore(keys.notes);
	let ids = parseInt(id, 10);
	let index = store.map((note) => {return note.id}).indexOf(ids);
    
    return index;
    }
    

