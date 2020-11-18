import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import CocktailService from './cocktail-service.js';

function clearFields() {
  $('#nameDrinkOrder').text('');
  $('#ingredientDrinkOrder').text('');
}

function getOrderByName(response) { //e.g. margarita, martini
  if (response.drinks[0]) { //name of drink, ingredients, measurements, instructions thumbnail
    $('.showName').html(`${response.strDrink}`) ;
  }
}

//function getOrderBySpirit() {}
$(document).ready(function() {
  $('#cocktailOrder').submit(function(event) {
    event.preventDefault();

  });
});