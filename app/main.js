let books = []
const endpointOfAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementToInsertBooks = document.querySelector('#livros')

getSearchAPIBooks ()

async function getSearchAPIBooks() {
    const res = await fetch (endpointOfAPI)
    books = await res.json()
    showBooksOnScreen(books)
}

function showBooksOnScreen(listOfBooks) {
    elementToInsertBooks.innerHTML = ''
    listOfBooks.forEach(book => {
        let availability = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementToInsertBooks.innerHTML += `
        
    <div class="livro">
      <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
      ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>

        `
        
    });

    
}