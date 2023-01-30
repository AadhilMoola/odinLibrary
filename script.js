// Cache the DOM

let container = document.querySelector('.container');
let header = document.querySelector('.header');
let booksDiv = document.querySelector('.books');
let newBookButton = document.querySelector('.newBookButton');
let footer = document.querySelector('.footer');



// Create Array of Books to cycle through
let myLibrary = [];

// Constructor Function of a book
function Book(title, author, pages, haveRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = haveRead
}


function addBookToLibrary(book){
 
    myLibrary.push(book)
}


let LOTR = new Book('Lord of The Rings', 'JRR Tolkein', '1050', true)

myLibrary.push(LOTR)



// Adds  all books from myLibrary onto the web page

for(let i = 0; i < myLibrary.length; i++)
    {
        let book = document.createElement('div')
        book.classList.add('book')

        let title = document.createElement('span')
        book.appendChild(title)
        title.classList.add('title')
        let titleText = document.createTextNode(myLibrary[i].title)
        title.appendChild(titleText)

        let author = document.createElement('span')
        book.appendChild(author)
        title.classList.add('author')
        let authorText = document.createTextNode(myLibrary[i].author)
        author.appendChild(authorText)

        let pages = document.createElement('span')
        book.appendChild(pages)
        title.classList.add('pages')
        let pagesText = document.createTextNode(`${myLibrary[i].pages} pages`)
        pages.appendChild(pagesText)

         let haveRead = document.createElement('span')
         book.appendChild(haveRead)
         haveRead.classList.add('haveRead')
         let haveReadBTN = document.createElement('button')
         haveReadBTN.classList.add('haveRead')
         let haveReadBTNText = document.createTextNode('Read')
         haveReadBTN.appendChild(haveReadBTNText)
         haveRead.appendChild(haveReadBTN)

         let deleteBTN = document.createElement('span')
         
         deleteBTN.classList.add('delete')
        
         let deleteSVGelement = document.createElementNS('http://www.w3.org/2000/svg','svg')
         deleteBTN.appendChild(deleteSVGelement)
        // deleteSVGelement.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
         deleteSVGelement.setAttributeNS(null, 'viewBox', '0 0 50 50' )
         
         let deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path')

         deleteSVG.setAttribute('d','M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z' )
         deleteSVGelement.appendChild(deleteSVG)
         
         book.appendChild(deleteBTN)
        




        booksDiv.appendChild(book)
    }