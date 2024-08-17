

let books = [];

// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add book to library array
function bookAdder() {
    let title = document.getElementById('bookTitle')
    let author = document.getElementById('bookAuthor')
    let pages = document.getElementById('bookPages')
    let read = document.querySelector('input[name="read"]:checked').value === "true";

    let newBook = new Book(title.value, author.value, pages.value, read.value);
    books.push(newBook);
    console.log(books);

    title.value = '';
    author.value = '';
    pages.value = '';
    displayBooks();
    
}

Book.prototype.info = function() {
    let isread = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isread}`;
}

// Function to display books
function displayBooks() {

    let bookShelf = document.getElementById('bookShelf');
    bookShelf.innerHTML = ''
    books.forEach(Book => {
        let row = document.createElement('tr');

        // Create cells for each property
        let titleCell = document.createElement('td');
        titleCell.textContent = Book.title;

        let authorCell = document.createElement('td');
        authorCell.textContent = Book.author;

        let pagesCell = document.createElement('td');
        pagesCell.textContent = Book.pages;

        let readCell = document.createElement('td');
        readCell.textContent = Book.read ? 'Yes' : 'No';

        // Append cells to the row
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);

        // Append the row to the table body
        bookShelf.appendChild(row);
    });

}

// Add event listener to the 'Add Book' button
let addBook = document.getElementById('addBook');
addBook.addEventListener('click', bookAdder);




// const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());



