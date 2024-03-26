

const prompt = require('prompt-sync')();

// Definindo a classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Função para calcular o valor total do produto
    calcularSubtotal() {
        let subtotal = this.preco * this.quantidade; // Cálculo do subtotal
        return subtotal; // Retorna o subtotal
    }
}

// Definição do carrinho de compras
const carrinhoDeCompras = {
    produtos: [],

    // Função para calcular o valor total da compra
    calcularTotal() {
        let total = 0; // Inicializa o total da compra
        this.produtos.forEach(produto => {
            total += produto.calcularSubtotal(); // Atualiza o total da compra com o subtotal de cada produto
        });
        return total; // Retorna o total da compra
    },

    // Função para exibir os produtos no carrinho
    exibirCarrinho() {
        console.log("Produtos no Carrinho:");
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.nome}, Preço Unitário: R$ ${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}, Subtotal: R$ ${produto.calcularSubtotal().toFixed(2)}`);
        });
        console.log(`Total da Compra: R$ ${this.calcularTotal().toFixed(2)}`); // Exibe o total da compra
    }
};

// Solicita o nome do usuário
const nomeUsuario = prompt("Digite seu nome: ");

// Função para adicionar um produto ao carrinho
function adicionarProdutoAoCarrinho() {
    let continuar = 's'; // Inicializa a variável de controle para entrar no loop

    while (continuar.toLowerCase() === 's') { // Enquanto o usuário quiser continuar comprando
        const nome = prompt("Digite o nome do produto:");
        const preco = parseFloat(prompt("Digite o preço do produto:"));
        const quantidade = parseInt(prompt("Digite a quantidade do produto:"));

        const produto = new Produto(nome, preco, quantidade); // Cria um novo produto
        carrinhoDeCompras.produtos.push(produto); // Adiciona o produto ao carrinho

        // Informa ao usuário que o produto foi adicionado ao carrinho
        console.log(`O produto ${produto.nome} foi adicionado ao carrinho.`);
        console.log(`Detalhes do produto:`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log(`Quantidade: ${produto.quantidade}`);

        // Exibe o total da compra após adicionar o produto ao carrinho
        console.log(`Total da Compra: R$ ${carrinhoDeCompras.calcularTotal().toFixed(2)}`);

        // Pergunta ao usuário se deseja continuar comprando
        continuar = prompt("Deseja continuar comprando? (s/n): ");
    }

    // Exibe o carrinho de compras
    carrinhoDeCompras.exibirCarrinho();
}

// Solicita ao usuário quantos produtos deseja adicionar ao carrinho
const numeroDeProdutos = parseInt(prompt("Quantos produtos você deseja adicionar ao carrinho?"));

if (!isNaN(numeroDeProdutos) && numeroDeProdutos > 0) {
    for (let i = 0; i < numeroDeProdutos; i++) {
        adicionarProdutoAoCarrinho();
    }
} else {
    console.log("Por favor, insira um número válido de produtos.");
}

// Exibe a mensagem final com o nome do usuário e os detalhes dos produtos comprados
console.log(`${nomeUsuario}, você está comprando:`);
carrinhoDeCompras.produtos.forEach(produto => {
    console.log(`Produto: ${produto.nome}, Quantidade: ${produto.quantidade}, Valor Total: R$ ${produto.calcularSubtotal().toFixed(2)}`);
});
console.log(`Valor Total da Compra: R$ ${carrinhoDeCompras.calcularTotal().toFixed(2)}`);





/* const prompt = require('prompt-sync')();: Esta linha importa o módulo prompt-sync para permitir a entrada de dados do usuário no terminal. Ele é usado para solicitar informações como nome, preço e quantidade do produto.

class Produto { ... }: Esta parte define a classe Produto, que é uma estrutura para representar um produto com nome, preço e quantidade.

constructor(nome, preco, quantidade) { ... }: Este é o construtor da classe Produto, onde os atributos nome, preco e quantidade são definidos.

calcularSubtotal() { ... }: Este método da classe Produto calcula o subtotal do produto multiplicando o preço pela quantidade.

const carrinhoDeCompras = { ... }: Aqui é definido o carrinho de compras, que é um objeto contendo uma lista de produtos e métodos para calcular o total da compra e exibir os produtos no carrinho.

calcularTotal() { ... }: Este método calcula o total da compra somando os subtotais de todos os produtos no carrinho.

exibirCarrinho() { ... }: Este método exibe os produtos no carrinho, mostrando o nome, preço unitário, quantidade e subtotal de cada produto, além do total da compra.

function adicionarProdutoAoCarrinho() { ... }: Esta função permite ao usuário adicionar produtos ao carrinho. Ela solicita o nome, preço e quantidade do produto, cria um novo objeto Produto com esses dados e o adiciona ao carrinho. Além disso, ela pergunta ao usuário se deseja continuar comprando após adicionar cada produto.

do { ... } while (continuar.toLowerCase() === 's'): Esta estrutura do-while permite que o usuário continue adicionando produtos ao carrinho enquanto ele desejar. Ele entra no loop ao menos uma vez e continua enquanto o usuário responder 's' para a pergunta se deseja continuar comprando.

const numeroDeProdutos = parseInt(prompt("Quantos produtos você deseja adicionar ao carrinho?"));: Esta linha solicita ao usuário o número de produtos que ele deseja adicionar ao carrinho.

if (!isNaN(numeroDeProdutos) && numeroDeProdutos > 0) { ... } else { ... }: Este bloco condicional verifica se o número de produtos inserido pelo usuário é válido (ou seja, é um número válido e maior que zero). Se for válido, ele chama a função adicionarProdutoAoCarrinho() para adicionar os produtos ao carrinho. Se não for válido, exibe uma mensagem de erro.

Resumo:
O código permite que o usuário adicione produtos a um carrinho de compras. Ele solicita o nome, preço e quantidade do produto, cria um objeto para representar o produto e o adiciona ao carrinho. Após cada adição de produto, pergunta ao usuário se ele deseja continuar comprando. Após o término das compras, exibe todos os produtos no carrinho, juntamente com o total da compra.

MAIS CONTINUACAO 

Claro! Vamos analisar o código mais detalhadamente:

Importação do módulo prompt-sync:

javascript
Copy code
const prompt = require('prompt-sync')();
Esta linha importa o módulo prompt-sync, que permite receber entradas do usuário pelo terminal. A função require é usada para importar o módulo, e o método prompt-sync é invocado para criar uma função prompt que pode ser usada para receber entradas do usuário.
Definição da classe Produ
Aqui é criado o objeto carrinhoDeCompras, que contém uma lista de produtos (produtos) e métodos para calcular o total da compra (calcularTotal) e exibir os produtos no carrinho (exibirCarrinho).
Função adicionarProdutoAoCarrinho:

javascript
Copy code
function adicionarProdutoAoCarrinho() {
    // ...
}
Esta função permite ao usuário adicionar produtos ao carrinho. Ela solicita o nome, preço e quantidade do produto, cria um novo objeto Produto com esses dados e o adiciona ao carrinho. Além disso, ela pergunta ao usuário se deseja continuar comprando após adicionar cada produto.
Solicitação do número de produtos:

javascript
Copy code
const numeroDeProdutos = parseInt(prompt("Quantos produtos você deseja adicionar ao carrinho?"));
Aqui, o programa solicita ao usuário o número de produtos que ele deseja adicionar ao carrinho, convertendo a entrada do usuário para um número inteiro usando parseInt.
Verificação do número de produtos:

javascript
Copy code
if (!isNaN(numeroDeProdutos) && numeroDeProdutos > 0) {
    // Adicionar produtos ao carrinho
} else {
    console.log("Por favor, insira um número válido de produtos.");
}
Esta estrutura condicional verifica se o número de produtos inserido pelo usuário é válido. Se for válido (um número maior que zero), o programa adiciona os produtos ao carrinho. Se não for válido, exibe uma mensagem de erro.
Resumo: Este código permite ao usuário adicionar produtos a um carrinho de compras, calcular o total da compra e exibir os produtos no carrinho. Ele é dividido em diferentes partes, incluindo a definição da classe Produto, a criação do carrinho de compras e a função para adicionar produt

// Solicita ao usuário quantos produtos deseja adicionar ao carrinho
const numeroDeProdutos = parseInt(prompt("Quantos produtos você deseja adicionar ao carrinho?"));

if (!isNaN(numeroDeProdutos) && numeroDeProdutos > 0) {
    for (let i = 0; i < numeroDeProdutos; i++) {
        adicionarProdutoAoCarrinho();
    }
} else {
    console.log("Por favor, insira um número válido de produtos.");
}

// Exibe a mensagem final com o nome do usuário
console.log(`${nomeUsuario}, você está comprando:`);
carrinhoDeCompras.produtos.forEach(produto => {
    console.log(`Produto: ${produto.nome}, Quantidade: ${produto.quantidade}, Valor Total: R$ ${(produto.calcularSubtotal() * produto.quantidade).toFixed(2)}`);
});
console.log(`Valor Total da Compra: R$ ${carrinhoDeCompras.calcularTotal().toFixed(2)}`);
console.log(nomeUsuario , ' os produtos que foram comprados sao' ,nome ,"e a quantidade ´é:" ,quantidade  )

========================================================================================================================================
*/