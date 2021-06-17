function getTotalBooksCount(books) {
 return books.length
}


function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter((book) => book.borrows[0].returned === false)
  return borrowedBooks.length
}

function getMostCommonGenres(books) {
  //create an array called genres
  let genres = [];
  
  //access the books array and set the iterator as book
  books.forEach((book) => {
    
    // create a new variable called genreIndex that will = genres.findIndex and set the iterator to genre
    let genreIndex = genres.findIndex((genre) => {
     
      // check if genre.name is equal to book.genre
     return genre.name === book.genre;
    });
    // if genre.name is = to book.genre this if statement below will run
    
    if (genreIndex !== -1) {
      // if this code runs, the genreIndex.count will be incremented by 1
      genres[genreIndex].count++;
      
      // if the first statement does not run, and genre.name is not = to book.genre, this code below will run
    } else {
      //the object with the key name and value of book.genre and key of count and value of 1 will be pushed into the genres array
      genres.push({ name: book.genre, count: 1 });
    }
  });
  // the values in the genres array will be sorted from highest count to lowest count
  genres.sort((a, b) => b.count - a.count);
  //slice will only return the index 0 through index 5 from the genres array
  return genres.slice(0, 5);
}


function getMostPopularBooks(books) {
    let popularityBooks = [];
      books.forEach((book) => {
        popularityBooks.push({"name": book.title, "count": book.borrows.length});
      });
    popularityBooks.sort((a, b) => b.count - a.count);
    return popularityBooks.slice(0, 5);    
  }


function _sortObjectByValues(object) {
  const keys = Object.keys(object);
  return keys.sort((keyA, keyB) => {
    if (object[keyA] > object[keyB]) {
      return -1;
    } else if (object[keyB] > object[keyA]) {
      return 1;
    } else {
      return 0;
    }
  })
}
function getMostPopularAuthors(books, authors) {
  const count = books.reduce((acc, {authorId, borrows}) => {
    if (acc[authorId]) {
      acc[authorId].push(borrows.length);
    } else {
      acc[authorId] = [borrows.length];
    }
    return acc
  }, {});
  for (let id in count) {
    const sum = count[id].reduce((acc,b) =>acc+b);
    count[id] = sum;
  }
  const sorted = _sortObjectByValues(count)
  let arr = sorted.map((authorId) => {
    const {name:{first, last}} = authors.find(({id}) => id === Number(authorId));
      let name = `${first} ${last}`;
    return {name, count:count[authorId]}
  }).slice(0,5);
  return arr
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
