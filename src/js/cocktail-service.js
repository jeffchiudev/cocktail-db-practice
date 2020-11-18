export default class CocktailOrder {
  static async orderByName(order) {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${order}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }

  static async orderBySpirit(ingredient) {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}