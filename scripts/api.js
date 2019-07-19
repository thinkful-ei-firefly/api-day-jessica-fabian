'use strict';
/* global Item store $ */

const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jessicafabian';

  const getItems =  function () {
  	return fetch(BASE_URL + "/items")
  		.then(res => {
  			//console.log(res.json());
  			return res.json();
  		})
  		.catch(err => console.error(err.message));
    //return Promise.resolve('A successful response!');
  };



  
  return {
    getItems,
  };

}();