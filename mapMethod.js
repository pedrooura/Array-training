function applyDiscount(books) {
    const discount = 0.3
    booksWithDescount = books.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)}
    })
    return booksWithDescount
}

// In this case I didnt really want to apply discount in my books, but this would be the code if anyone wants to do it like this xD