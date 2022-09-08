// Define the classes and their methods (including parameters and return types) for a system that consist of a bookshelf, books, magazines, and notebooks.
// The bookshelf should allow store and retrieval of the items, reporting on the state of the bookshelf (how many items it has, how many more items it can hold), and searching for items based on the page contents.
// The other items should allow reading of a single page given the page number that returns the text of the page.
// A book has an accessible title and author.
// A magazine has an accessible name and publication date.
// A notebook has an accessible owner.

class ReadingMaterial {
  constructor(pages) {
    this.pages = pages;
  }
  readPage(page) {
    const chosenPage = this.pages.find((p) => p.page === page);
    return chosenPage;
  }
}

class Book extends ReadingMaterial {
  constructor(title, author, pages) {
    super(pages);
    this.title = title;
    this.author = author;
  }
}

class Magazine extends ReadingMaterial {
  constructor(name, publicationDate, pages) {
    super(pages);
    this.name = name;
    this.publicationDate = publicationDate;
  }
}

class Notebook extends ReadingMaterial {
  constructor(owner, pages) {
    super(pages);
    this.owner = owner;
  }
}

class Bookshelf {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
  }

  store(item) {
    const state = this.state();
    if (state.left > 0) {
      this.items.push(item);
    } else {
      console.log("Cant store anyhting more in here");
    }
  }

  state() {
    return {
      itemCount: this.items.length,
      left: this.capacity - this.items.length,
    };
  }

  search(pageContent) {
    // Search algo should be implemented for better performance
    for (let i = 0; i < this.items.length; i++) {
      const currItem = this.items[i];
      for (let j = 0; j < currItem.pages.length; j++) {
        const currPage = currItem.pages[j];
        if (currPage.content.includes(pageContent)) {
          return currItem;
        }
      }
    }
  }
}

// Testing

// Create  a book
const sampleBook = new Book("test", "borisa", [
  { page: 1, content: "Sample Content" },
  { page: 2, content: "Sample Content 2" },
  { page: 3, content: "Sample Content 3" },
]);

// Cerate a notebook
const sampleNotebook = new Notebook("Borisa", [
  {
    page: 1,
    content: "asfasfa",
  },
]);

// Create bookshelf and add its capacity
const sampleBookshelf = new Bookshelf(2);

// Add bookshelf items
sampleBookshelf.store(sampleBook);
sampleBookshelf.store(sampleNotebook);
