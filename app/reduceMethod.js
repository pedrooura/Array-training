function sumAllPrices(books) {
    const avaliableBooksHtml = document.querySelector('#valor_total_livros_disponiveis')
const bookPrices = books.map(book => book.preco) 
const totalBookPrice = bookPrices.reduce((total, price) => total + price, 0);

console.log(totalBookPrice)


avaliableBooksHtml.innerHTML = `<div class="livros__disponiveis">
<p>All avaliable books  for R$ <span id="valor">${totalBookPrice}0</span></p>
</div>`
}

