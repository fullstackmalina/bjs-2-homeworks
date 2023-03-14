class Book {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state *= 1.5;
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state, "fantastic");
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state, "detective");
        this.author = author;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = this.books.find(book => book[type] === value);
        return foundBook ? foundBook : null;
    }

    giveBookByName(bookName) {
        let foundBook = this.books.find(book => book.name === bookName);
        if (!foundBook) {
            return null;
        }
        this.books.splice(this.books.indexOf(foundBook), 1);
        return foundBook;
    }
}

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class NovelBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008,
        35
    )
);

library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168,
        50
    )
);

library.addBook(
    new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138)
);

library.addBook(new Magazine("Мурзилка", 1924, 60));