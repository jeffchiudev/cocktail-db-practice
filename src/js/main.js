import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import CocktailOrder from './cocktail-service.js';

// function clearFields() {
//   $('#nameDrinkOrder').text('');
//   $('#ingredientDrinkOrder').text('');
// }

function getOrderByName(response) { //e.g. margarita, martini
  if (response.drinks) { //name of drink, ingredients, measurements, instructions thumbnail
    $('.showName').html(`${response.drinks[0].strDrink}`);
  }
}

//function getOrderBySpirit() {}
$(document).ready(function() {
  $('#cocktailOrder').submit(function(event) {
    event.preventDefault();
    let drink = $('#drink-search').val();
    //clearFields();
      (async function() {
        const response = await CocktailOrder.orderByName(drink);
        getOrderByName(response);
      })();
  });
});