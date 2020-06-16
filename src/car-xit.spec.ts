
describe('get info and action of  book with xit and it', () => {

  xit('should add book', () => {
    throw new Error('work in progress');
  });


   // !todo pour dire que ce test unitaire est en cours; (only description)
  it.todo('should get total ammount of cart');

  // ! it : realise le test unitaire qui sera egalement commit;
  it('price of book in cart' , () => {
          const priceBook = 45;
          expect(priceBook).toEqual(45);
        });

  it('price of book in cart with after discount' , () => {
          const priceBookWithDiscount = 45 * 0.90;
          expect(priceBookWithDiscount).toEqual(40.5);
        });

  xit('should remove book from cart', () => {
    // !on  exlus ce test la pour etre sur qu' i l n' y ai aucune modification ;
    // nous allons faire du comment driven development

            // create a cart
            // add book
            // add more books
            // get total of books
            // check contain both in same order

     throw new Error('work in progress');
  });


});
