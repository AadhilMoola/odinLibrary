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


let LOTR = new Book('Lord of The Rings', 'JRR Tolkein', '1050', true, )
let Psych = new Book('The Psychology of Money' , 'Morgan Housell' , '300' , false)
myLibrary.push(LOTR)
myLibrary.push(Psych)



// Adds  all books from myLibrary onto the web page

for(let i = 0; i < myLibrary.length; i++)
    {

        //  Create the book element will all the right details

        let book = document.createElement('div')
        book.classList.add('book')
        book.setAttribute('data-index', i)

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
        //haveRead.classList.add('haveRead')

        let haveReadBTN = document.createElement('button')
        haveReadBTN.setAttribute('data-index', i)
        haveReadBTN.classList.add('readButton')

        if(myLibrary[i].read == true)
        {
            haveReadBTN.classList.add('haveRead')
            let haveReadBTNText = document.createTextNode('Read')
            haveReadBTN.appendChild(haveReadBTNText)
            haveRead.appendChild(haveReadBTN)
        }else{
            haveReadBTN.classList.add('haveNotRead')
            let haveReadBTNText = document.createTextNode('Not Read')
            haveReadBTN.appendChild(haveReadBTNText)
            haveRead.appendChild(haveReadBTN)
        }


         let deleteBTN = document.createElement('span')
         
         deleteBTN.classList.add('delete')
         deleteBTN.setAttribute('data-index', i)
        
         let deleteSVGelement = document.createElementNS('http://www.w3.org/2000/svg','svg')
         deleteBTN.appendChild(deleteSVGelement)
         deleteSVGelement.setAttributeNS(null, 'viewBox', '0 0 50 50' )
         
         let deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path')

         deleteSVG.setAttribute('d','M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z' )
         deleteSVGelement.appendChild(deleteSVG)
         
         book.appendChild(deleteBTN)
        

        // Add this newly created element to the webpage

        booksDiv.insertBefore(book, newBookButton)
    }




    // Read and unread buttons

    let readButton = document.querySelectorAll('.readButton')


    for(let i = 0; i <readButton.length; i++){
        readButton[i].addEventListener('click', function(){
            if (readButton[i].classList.contains('haveRead'))
            {
                readButton[i].classList.remove('haveRead')
                readButton[i].classList.add('haveNotRead')
                readButton[i].textContent = 'Not Read'
                myLibrary[readButton[i].getAttribute('data-index')].read = false
                
            }
            else{
                readButton[i].classList.remove('haveNotRead')
                readButton[i].classList.add('haveRead')
                readButton[i].textContent = 'Read'
                myLibrary[readButton[i].getAttribute('data-index')].read = true
            }

        })
    }

    
let deleteBTN = document.querySelectorAll('.delete')

let books = document.querySelectorAll('.book')

for(let i = 0; i < deleteBTN.length ; i++ )
{
    deleteBTN[i].addEventListener('click' , function(){

        myLibrary.splice(deleteBTN[i].getAttribute('data-index'))
        books[deleteBTN[i].getAttribute('data-index')].remove()
        console.log(myLibrary)
    })
}











