import { BookListComponent } from './book-list.component';
import { Book } from '../../cart/book';
import { Cart } from '../../cart/cart';


describe('BookListComponent', () => {

  let cart: Cart;

  /**
   * beforeEach : permet d'inscrire une fonction de "setup" qui sera appelée avant chaque "spec".
   * Les fonctions de "setup" permettent de préparer un environnement sain pour chaque "spec".
   */

  beforeEach(() => {
    // j instancie mon panier
    cart = new Cart();
  });

  it('should add a book in cart', () => {

    // j instancie mes livres
    const xp = new Book('the new book on x-programming', 'bubble');
    const learnBigData = new Book(' big data of 2020 ', 'toto');

    // j instancie mon composent
    const component = new BookListComponent(cart);
    // bookList sera un @input dans mon component : array[]
    component.bookList = [xp, learnBigData];
    // test la fonction ajout  un livre avec en parametre le livre : xp
    component.addBook(xp);
    // verifier que le panier contiens bien le livre
    expect(cart.getBookList()).toEqual([xp]);


  });

});
