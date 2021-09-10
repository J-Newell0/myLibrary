
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

    addBook(newBook) {
        this.books.push(newBook);
        
    }

	getBook(title) {
        return title = this.books.find((book) => book.title === title);
      
	}

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }
}



const shelf = new Bookshelf()


// Naming DOM elements
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]'); 
const overlay = document.getElementById('overlay');
const shelfGrid = document.getElementById('shelf');
const formAddBooks = document.getElementById('formAddBooks');
const formSubmit = document.getElementById('submit-btn');


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
    formAddBooks.reset()
    console.log('closeModal');
}

// 
// 

const getFormInput = () => {
    const title = document.getElementById('title').value;
    console.log(document.getElementById('title').value);
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    return new Book(title, author, pages, isRead)
}

//

const addBook = (e) => {
    e.preventDefault();
    const newBook = getFormInput();
    shelf.addBook(newBook);
    makeCard(newBook);
   
    closeModal(modal);
   }

const removeBook = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML;
    shelf.removeBook(title);
    updateShelfGrid();
}

const toggleRead = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML;
    const book = shelf.getBook(title);
       
	book.haveRead = !(book.haveRead);
    updateShelfGrid();
    console.log('Toggle Read')
}

const updateShelfGrid = () => {
    resetShelfGrid()
    for (let book of shelf.books) {
        makeCard(book);
    }
}

const resetShelfGrid = () => {
    shelfGrid.innerHTML = ' '
}

formSubmit.addEventListener('click', addBook)

// Creation of Book Cards
const makeCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('h3')
    const author = document.createElement('h3')
    const pages = document.createElement('h3')
    const buttons = document.createElement('div')
    const removeBookBtn = document.createElement('button')
    const readBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    buttons.classList.add('card-buttons')
    readBtn.classList.add('read-btn', 'btn')
    removeBookBtn.classList.add('del-btn', 'btn')

	if (book.haveRead === true) {
		bookCard.classList.add('read');
	} else {
		bookCard.classList.add('not-read');
	}

    readBtn.onclick = toggleRead
    removeBookBtn.onclick = removeBook

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBookBtn.textContent = 'Delete'
    readBtn.textContent = 'Read'

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttons.appendChild(readBtn)  
    buttons.appendChild(removeBookBtn)  
    bookCard.appendChild(buttons)
    shelfGrid.appendChild(bookCard)
}
