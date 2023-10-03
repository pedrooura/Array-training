const btnFilters = document.querySelectorAll('.btnFilters')

btnFilters.forEach(btn => btn.addEventListener('click', bookFilter))

function bookFilter () {
    const btnElement = document.getElementById(this.id)
    const bookCategory = btnElement.value
    let filteredBooks = bookCategory == 'disponivel' ? books.filter(book => book.quantidade > 0) :books.filter(book => book.categoria == bookCategory)
    showBooksOnScreen(filteredBooks)

    if (bookCategory == 'disponivel') {
        sumAllPrices(filteredBooks)
    }
}