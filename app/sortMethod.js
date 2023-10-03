
const orderByPrice = document.getElementById('btnOrdenarPorPreco');
let ascendingOrder = true;  

orderByPrice.addEventListener('click', toggleOrder);

function toggleOrder() {
    ascendingOrder = !ascendingOrder; 
    orderBooksByPrice();
}

function orderBooksByPrice() {
    let orderedBooks;
    if (ascendingOrder) {
        orderedBooks = books.sort((a, b) => b.preco - a.preco);
    } else {
        orderedBooks = books.sort((a, b) => a.preco - b.preco);
    }
    showBooksOnScreen(orderedBooks);
}