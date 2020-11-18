import CocktailOrder from '../src/js/cocktail-service';

describe('CocktailOrder', () => {
  let order1;
  beforeEach(() => {
    order1 = new CocktailOrder('jeff','margarita');
  })

  test('should correctly take in an order from a form entry', () => {
    expect(order1.name).toEqual('jeff');
    expect(order1.drinkOrder).toEqual('margarita');
  });
})