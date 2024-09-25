export const ADICIONAR_PRODUTO = 'ADICIONAR_PRODUTO';
export const REMOVER_PRODUTO = 'REMOVER_PRODUTO';


export const adicionarProduto = (produto) => ({
    type: ADICIONAR_PRODUTO,
    payload: produto,
});

export const removerProduto = (produto) => ({
    type: REMOVER_PRODUTO,
    payload: produto,
});