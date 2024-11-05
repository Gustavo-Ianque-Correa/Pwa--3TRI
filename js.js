const itens = {
    limpeza: ['Detergente', 'Sabão em pó', 'Desinfetante'],
    alimentacao: ['Arroz', 'Feijão', 'Macarrão'],
    utilidades: ['Papel toalha', 'Fita adesiva', 'Sacos de lixo']
};

const categoriaSelect = document.getElementById('categoria');
const listaItens = document.getElementById('lista-itens');
const carrinho = document.getElementById('carrinho');

categoriaSelect.addEventListener('change', function() {
    const categoriaSelecionada = this.value;
    listaItens.innerHTML = ''; 

    if (categoriaSelecionada) {
        itens[categoriaSelecionada].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

        
            const botaoAdicionar = document.createElement('button');
            botaoAdicionar.textContent = 'Adicionar ao Carrinho';
            botaoAdicionar.onclick = () => adicionarAoCarrinho(item);
            li.appendChild(botaoAdicionar);

            listaItens.appendChild(li);
        });
    }
});


function adicionarAoCarrinho(item) {
    const li = document.createElement('li');
    li.textContent = item;

    
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = () => {
        carrinho.removeChild(li);
    };
    li.appendChild(botaoRemover);

    carrinho.appendChild(li);
}