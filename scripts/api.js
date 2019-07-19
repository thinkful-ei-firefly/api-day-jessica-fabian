'use strict';
/* global Item store $ */

const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jessicafabian';

  const getItems =  function () {
  	return fetch(`${BASE_URL}/items`)
  		.catch(err => console.error(err.message));
    //return Promise.resolve('A successful response!');
  };

  const createItem = function (name) {
    const newItem = JSON.stringify({ name, });
    return fetch(`${BASE_URL}/items`, {
      method : 'POST', 
      headers : {'Content-Type' : 'application/json'}, 
      body : newItem});
      

  };




  return {
    getItems,
    createItem,
  };

}();