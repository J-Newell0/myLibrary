

class Book {
    constructor(title, author, pages, read) {
    // this.id = book.id
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = read;
    }
}

class Bookshelf {
    constructor() {
        this.books = [];
    }
}

function addBookToLibrary() {
    newBook = new Book(title, author, pages, read);
    bookShelf.push(newBook);
}

const bookShelf = new Bookshelf()


// Naming DOM elements
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]'); 
const overlay = document.getElementById('overlay');
const shelfGrid = document.getElementById('shelf');
const formAddBooks = document.getElementById('formAddBooks');


// Modal interactions
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


//Creation of Book Cards
const makeCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('h3')
    const author = docuemnt.createElement('h3')
    const pages = document.createElement('h3')
    const removeBookBtn = document.createElement('button')
    const readBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    readBtn.classList.add('btn')
    removeBookBtn.classList.add('btn')

    readBtn.onclick = toggleRead
    removeBookBtn.onclick = removeBook

    title.textContent = `'${book.title}'`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBookBtn.textContent = 'Delete'

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBookBtn)
    shelfGrid.appendChild(bookCard)
}

addBookBtn.onclick = openAddBookModal;