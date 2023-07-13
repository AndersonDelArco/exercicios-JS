// Array de produtos
var produtos = [
    { produto: 'Camiseta', categoria: 'Roupas', preco: 29.99 },
    { produto: 'Celular', categoria: 'Eletrônicos', preco: 1899.99 },
    { produto: 'Livro', categoria: 'Livros', preco: 19.99 },
    { produto: 'Tênis', categoria: 'Calçados', preco: 79.99 },
    { produto: 'Headphone', categoria: 'Eletrônicos', preco: 129.99 },
  ];

  // Função para exibir a lista de produtos na página
  function exibirProdutos() {
    var productList = document.getElementById('product-list');

    // Limpa a tabela antes de adicionar os produtos
    productList.innerHTML = '';

    // Percorre o array de produtos e adiciona cada item à tabela
    produtos.forEach(function (produto) {
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + produto.produto + '</td>' +
                      '<td>' + produto.categoria + '</td>' +
                      '<td>' + produto.preco + '</td>';
      productList.appendChild(row);
    });
  }

