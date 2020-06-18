import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../cart/book';
import { Cart } from '../../cart/cart';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input()  bookList: Book[];


  // tslint:disable-next-line: variable-name
  constructor(private _cart: Cart) { }

  ngOnInit(): void {
  }

  addBook(book: Book) {
    this._cart.addBook(book);
   }


}
