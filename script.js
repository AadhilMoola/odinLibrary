let myLibrary = [];

function Book(name, author, pages, haveRead){
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.read = haveRead
}


function addBookToLibrary(book){
    myLibrary.push(book)
}


