const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addBookToLibrary);


let bookShelf = [];
let newBook;

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = read;
    }
}

function addBookToLibrary() {
    newBook = new Book(title, author, pages, read);
    bookShelf.push(newBook);
}