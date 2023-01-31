// Cache the DOM

let container = document.querySelector('.container');
let header = document.querySelector('.header');
let booksDiv = document.querySelector('.books');
let newBookButton = document.querySelector('.newBookButton');
let footer = document.querySelector('.footer');
let modal = document.querySelector('.modal');
let form = document.querySelector('form');


// Create Array of Books to cycle through
let myLibrary = [];

// Constructor Function of a book
function Book(title, author, pages, haveRead, index){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = haveRead
    this.index = index
}


function addBookToLibrary(book){
 
    myLibrary.push(book)
}




// Adds  all books from myLibrary onto the web page

function populatePage(book)
    {

        //  Create the book element will all the right details

        let bookElement = document.createElement('div')
        bookElement.classList.add('book')
        bookElement.setAttribute('data-index', book.index)

        // Title
        let title = document.createElement('span')
        bookElement.appendChild(title)
        title.classList.add('title')
        let titleText = document.createTextNode(book.title)
        title.appendChild(titleText)

        // Author
        let author = document.createElement('span')
        bookElement.appendChild(author)
        title.classList.add('author')
        let authorText = document.createTextNode(book.author)
        author.appendChild(authorText)

        // Pages
        let pages = document.createElement('span')
        bookElement.appendChild(pages)
        title.classList.add('pages')
        let pagesText = document.createTextNode(`${book.pages} pages`)
        pages.appendChild(pagesText)

       
        // Read or Not
        let haveRead = document.createElement('span')
        bookElement.appendChild(haveRead)
        let haveReadBTN = document.createElement('button')
        haveReadBTN.setAttribute('data-index', book.index)
        haveReadBTN.classList.add('readButton')
        // Different class if Read or Not
        if(book.read == true)
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
        // Button that will change from Read to not Read
        haveReadBTN.addEventListener('click', ()=>{
            if(book.read == true)
            {
                haveReadBTN.classList.remove('haveRead')
                haveReadBTN.classList.add('haveNotRead')
                haveReadBTN.textContent = 'Not Read'
                myLibrary[haveReadBTN.getAttribute('data-index')].read = false
            }else{
                haveReadBTN.classList.remove('haveNotRead')
                haveReadBTN.classList.add('haveRead')
                haveReadBTN.textContent = 'Read'
                myLibrary[haveReadBTN.getAttribute('data-index')].read = true
            }
        })

        
        // Delete Button
         let deleteBTN = document.createElement('span')
         
         deleteBTN.classList.add('delete')
         deleteBTN.setAttribute('data-index', book.index)
        
         let deleteSVGelement = document.createElementNS('http://www.w3.org/2000/svg','svg')
         deleteBTN.appendChild(deleteSVGelement)
         deleteSVGelement.setAttributeNS(null, 'viewBox', '0 0 50 50' )
         
         let deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path')

         deleteSVG.setAttribute('d','M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z' )
         deleteSVGelement.appendChild(deleteSVG)
         
         bookElement.appendChild(deleteBTN)
        
         deleteBTN.addEventListener('click' , function(){

            // Removes from the array
            myLibrary.splice(deleteBTN.getAttribute('data-index'))

            // Removes element of the webpage
            this.parentElement.remove()

        })



        // Add this newly created element to the webpage

        booksDiv.insertBefore(bookElement, newBookButton)
    }





// Add New Book Pop up

newBookButton.addEventListener('click' , function(){

modal.showModal()

})

// Need an index for the data-index attribute
let index=0;

// Modal Submit button
let addToLibrary = document.querySelector('.addToLibrary')

addToLibrary.addEventListener('click' , ()=>{
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let haveRead = document.querySelector('#haveRead').checked
    

    let newBook = new Book(title, author, pages, haveRead, index)
    addBookToLibrary(newBook)
    populatePage(newBook)
    //readButtons()
    index++;
    form.reset()

})



// Populates page with existing books as objects
for(let i = 0; i < myLibrary.length; i++)
{
    populatePage(myLibrary[i])
}








//Old Code



    // Read and unread buttons

//function readButtons(){ 

    // let readButton = document.querySelectorAll('.readButton')


    // for(let i = 0; i <readButton.length; i++){
    //     readButton[i].addEventListener('click', function(){

    //         // If book is already set to read
    //         if (readButton[i].classList.contains('haveRead'))
    //         {
    //             // Changes from Read to Not Read
    //             readButton[i].classList.remove('haveRead')
    //             readButton[i].classList.add('haveNotRead')
    //             readButton[i].textContent = 'Not Read'
    //             myLibrary[readButton[i].getAttribute('data-index')].read = false
                
    //         }
    //         else{
    //             // Changes from Not Read to Read
    //             readButton[i].classList.remove('haveNotRead')
    //             readButton[i].classList.add('haveRead')
    //             readButton[i].textContent = 'Read'
    //             myLibrary[readButton[i].getAttribute('data-index')].read = true
    //         }

    //     })
    // }
//}

    // Get the delete button to work

// Didn't need this anymore. Placed the button when creating the book

// function deleteButtons(){
//     let deleteBTN = document.querySelectorAll('.delete')

//     let books = document.querySelectorAll('.book')

//     for(let i = 0; i < deleteBTN.length ; i++ )
//     {
//         deleteBTN[i].addEventListener('click' , function(){

//             // Removes from the array
//             myLibrary.splice(deleteBTN[i].getAttribute('data-index'))

//             // Removes element of the webpage
//             books[deleteBTN.getAttribute('data-index')].remove()

//         })
//     }
// }



//Test Objects
// let LOTR = new Book('Lord of The Rings', 'JRR Tolkein', '1050', true, )
// let Psych = new Book('The Psychology of Money' , 'Morgan Housell' , '300' , false)
// myLibrary.push(LOTR)
// myLibrary.push(Psych)
