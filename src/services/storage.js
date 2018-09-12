export const keys = {
notes: 'notes',
id: 'id'
}

export const getLocalStore = function(key){
	let item =
	localStorage.getItem(key);
	item = JSON.parse(item);
	return item;
}

export const setLocalStore = function(key, store){ 
	let item = JSON.stringify(store);
	
	localStorage.setItem(key, item);
}


