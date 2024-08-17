

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.info = function() {
    if (this.read == true) {
        isread = "read"
    }
    else {
        isread = "not read yet"
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isread}`;
}


// Add book to library

let addBook = document.getElementById('addBook');

addBook.addEventListener('click', function() {
    let author = document.getElementById('bookTitle').value;
    console.log(author);
});


const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());




