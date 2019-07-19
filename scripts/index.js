'use strict';
/* global shoppingList, store, Item, $, api */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
  	.then(res => res.json())
  	.then((items) => {
  		items.forEach((item) => store.addItem(item));
  		shoppingList.render();
  	});
});


api.getItems()
	.then(res => res.json())
	.then((items) => {
		const item = items[1];
		return api.updateItem(item.id, {name: 'foobar1111'});
	})
	.then(res => res.json())
	.then(() => console.log('Updated!'));

/*
api.createItem('pears')
  .then(res => res.json())
  .then(newItem => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });
  */