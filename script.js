

let books = [];
let bookId = 0;

// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uniqueId = bookId;
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

// Function to delete a book
function deleteBook(ind){
    // Remove the book with the corresponding bookId
    books.splice(ind, 1);
    displayBooks();
    console.log('delete', ind);
}

// Function to display books
function displayBooks() {
    if (books.length === 0){
        console.log('no books');
    }

    let yourBooks = document.getElementById('yourBooks');
    yourBooks.innerHTML = '';
    bookId = 0;

    books.forEach(Book => {
        // Create card & content for book
        let bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.id = bookId;

        let titleCell = document.createElement('p');
        titleCell.textContent = Book.title;

        let authorCell = document.createElement('p');
        authorCell.textContent = Book.author;

        let pagesCell = document.createElement('p');
        pagesCell.textContent = Book.pages;

        let readCell = document.createElement('p');
        readCell.textContent = Book.read ? 'Yes' : 'No';

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "Delete";

        // Attach the event listener correctly
        deleteBtn.addEventListener('click', function() {
            deleteBook(bookCard.id);
        });

        deleteBtn.classList.add('deleteBtn');

        // Append card content to card
        bookCard.appendChild(titleCell);
        bookCard.appendChild(authorCell);
        bookCard.appendChild(pagesCell);
        bookCard.appendChild(readCell);
        bookCard.appendChild(deleteBtn);

        // Append card to yourBooks
        yourBooks.appendChild(bookCard);

        // Increment bookId counter
        bookId++;
    });
}


// Add event listener to the 'Add Book' button
let addBook = document.getElementById('addBook');
addBook.addEventListener('click', bookAdder);



