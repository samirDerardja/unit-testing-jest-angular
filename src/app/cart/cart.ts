import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
    providedIn: 'root'
})
export class Cart {
    // tslint:disable-next-line: variable-name
    private _bookList: Book[] = [];

    addBook(book: Book) {
        this._bookList = [...this._bookList, book];
    }

    getBookList() {
        return this._bookList;
    }
}
