function findAuthorById(authors, id) {
  let matchingAuthor = authors.find((author) => author.id === id)
  return matchingAuthor
}

function findBookById(books, id) {
  let matchingBook = books.find((book) => book.id === id)
  return matchingBook
}

function partitionBooksByBorrowedStatus(books) {
  let result = [] 
  let borrowedBooks = []
  let returnedBooks = []
  books.forEach((book) => 
  book.borrows[0].returned ? returnedBooks.push(book) : borrowedBooks.push(book)
)
  result.push(borrowedBooks, returnedBooks)
  return result
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...account, returned: borrow.returned};
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
