import { Cart } from './cart';
import { Book } from './book';

describe('cart', () => {

it('should add book in cart', () => {

  const cart = new Cart();
  const xp = new Book('the new book on x-programming', 'bubble');
  const learnBigData  = new Book(' big data of 2020 ', 'toto');

  cart.addBook(xp);
  cart.addBook(learnBigData);

  const getBookList = cart.getBookList();
  expect(getBookList).toEqual([xp, learnBigData]);

        // create a cart
        // add  a book
        // add more book
        // get a list of book
        // check contain both books in same order

});

it.todo('should remove book in cart');

it.todo('should get total of cart');

});
