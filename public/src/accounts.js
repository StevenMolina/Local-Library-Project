function findAccountById(accounts, id) {
  let matchingId = accounts.find((account) => account.id === id);
  return matchingId;
}

function sortAccountsByLastName(accounts) {
  let lastNamesSorted = accounts.sort((lastA, lastB) =>
    lastA.name.last > lastB.name.last ? 1 : -1
  );
  return lastNamesSorted;
}

function getTotalNumberOfBorrows(account, books) {
  let borrowedBooks = 0;
  books.forEach((book) => {
    book.borrows.forEach((borrowed) => {
      if (account.id === borrowed.id) borrowedBooks += 1;
    });
  });
  return borrowedBooks;
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = books.filter((book) =>
    book.borrows.find(
      (borrow) => borrow.returned === false && borrow.id === account.id
    )
  );
  return borrowedBooks.map((book) => {
    return {
      ...book,
      author: authors.find((author) => author.id === book.authorId),
    };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
