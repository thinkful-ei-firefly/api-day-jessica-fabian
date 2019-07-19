'use strict';
/* global shoppingList, store, Item, $, api */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

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