class Book {
  constructor(writer) {
    this.writer = writer;
  }

  get author() {
    return this.writer;
  }

  set author(x) {
    this.writer = x;
  }
}

class Novel extends Book {
  constructor(writer, cat) {
    super(writer);
    this.category = cat;
  }

  get genre() {
    return this.category;
  }

  set genre(y) {
    this.category = y;
  }

  showOff() {
    return `I own River Dale by ${this.author} which falls under ${this.genre}`;
  }
}

const myBook = new Novel('Humayun', 'Thriller');

// myBook.author = 'Joshim Uddin';
// myBook.genre = 'Romance';

console.log(myBook.showOff());
