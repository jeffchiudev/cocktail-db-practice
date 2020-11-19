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
    $('.showDrink').html(`<p>Name: ${response.drinks[0].strDrink}</p><p>Instructions: ${response.drinks[0].strInstructions}</p>`);
    $('.showIngredients').html(`<ul>Ingredients: ${response.drinks[0].strIngredient1} </ul>`);
    $('.showMeasure').html(`<ul>Measure: ${response.drinks[0].strMeasure1}</ul>`);
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