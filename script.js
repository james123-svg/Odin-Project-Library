

let books = [];
let bookId = 0;


// Book constructor

function Book(title, author, pages, read, imgUrl){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uniqueId = bookId;
    this.imgUrl = imgUrl;
}

Book.prototype.info = function() {
    let isread = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isread}`;
}


// Open & close modal to add book
const addForm = document.querySelector('.addForm');
const openModal = document.getElementById('openModal');
const modalWindow = document.getElementById('modal');
const closeBtn = document.querySelector('.closeBtn');

// Open the modal
openModal.addEventListener('click', function() {
    modalWindow.classList.add('modal');
    modalWindow.setAttribute('open', 'true');
});

// Close the modal when close button is clicked
closeBtn.addEventListener('click', modalClose);

// Close the modal when clicking outside the form content
modalWindow.addEventListener('click', function(event) {
    // Check if the click is outside the form element
    if (!event.target.closest('form')) {
        modalClose();
    }
});

// Function to close the modal
function modalClose() {
    modalWindow.classList.remove('modal');
    modalWindow.removeAttribute('open');
    console.log('Modal closed');
}


// Add book to library array

function bookAdder() {
    let title = document.getElementById('bookTitle')
    let author = document.getElementById('bookAuthor')
    let pages = document.getElementById('bookPages')
    let read = document.getElementById('bookIsRead')
    let imgUrl = document.getElementById('bookImg')

    let newBook = new Book(title.value, author.value, pages.value, read.value, imgUrl.value);
    books.push(newBook);
    console.log(books);

    addForm.reset();
    displayBooks();
    modalClose();
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

        // Create the main card div
        let card = document.createElement('div');
        card.classList.add('card'); // Add the card class
        card.classList.add('book'); 
        card.id = bookId;
    
        // Create the card-cover div and set the background image
        let cardCover = document.createElement('div');
        cardCover.classList.add('card-cover');
        cardCover.style.backgroundImage = `url("${Book.imgUrl}")`; // Set background image
    
        // Create the flex-h div
        let flexH = document.createElement('div');
        flexH.classList.add('flex-v');
    
        // Create the text container div
        let textContainer = document.createElement('div');
    
        // Create and append the h4 (title)
        let titleElement = document.createElement('h4');
        titleElement.textContent = Book.title;
        textContainer.appendChild(titleElement);
    
        // Create and append the h5 (author)
        let authorElement = document.createElement('h5');
        authorElement.textContent = Book.author;
        textContainer.appendChild(authorElement);
    
        // Append the text container to the flex-v div
        flexH.appendChild(textContainer);
    
        // Add a line break
        let lineBreak = document.createElement('br');
        flexH.appendChild(lineBreak);
    
        // Create the delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', function() {
                deleteBook(card.id);
            });
    
        // Create the SVG icon
        let svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcon.setAttribute("height", "20px");
        svgIcon.setAttribute("viewBox", "0 -960 960 960");
        svgIcon.setAttribute("width", "20px");
        svgIcon.setAttribute("fill", "currentColor");
    
        // Create the SVG path
        let svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        svgPath.setAttribute("d", "M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z");
    
        // Append the path to the SVG
        svgIcon.appendChild(svgPath);
    
        // Append the SVG to the delete button
        deleteBtn.appendChild(svgIcon);
    
        // Append the delete button to the flex-h div
        flexH.appendChild(deleteBtn);
    
        // Append the card-cover and flex-h divs to the main card
        card.appendChild(cardCover);
        card.appendChild(flexH);
    


        // Append card to yourBooks
        yourBooks.appendChild(card);

        // Increment bookId counter
        bookId++;
    });
}


// Add event listener to the 'Add Book' button

document.getElementById('addBook').addEventListener('click', function(event) {

    // Check if the form is valid
    if (addForm.checkValidity()) {
        // If valid, call the function
        bookAdder();
    } else {
        // Prevent form submission and show validation errors
        event.preventDefault();
        addForm.reportValidity(); // Optionally show validation errors
    }
});

// Add some default books


let defaultBook = new Book('The Power of Now', 'Eckhart Tole', 389, true, 'https://cdn.kobo.com/book-images/59e80730-aaad-4b30-ac1d-fd5952880c01/1200/1200/False/the-power-of-now-1.jpg');
books.push(defaultBook);
defaultBook = new Book('The Power of Now', 'Eckhart Tole', 389, true, 'https://exclusivebooks.co.za/cdn/shop/products/9780340733509_ba42147a-d34e-4192-90ab-7e8d68c947ab.jpg?v=1707243823');
books.push(defaultBook);
defaultBook = new Book('The Power of Now', 'Eckhart Tole', 389, true, 'https://exclusivebooks.co.za/cdn/shop/products/9780340733509_ba42147a-d34e-4192-90ab-7e8d68c947ab.jpg?v=1707243823');
books.push(defaultBook);

displayBooks();