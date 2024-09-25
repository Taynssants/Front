import { ADICIONAR_PRODUTO, REMOVER_PRODUTO } from '../redux/action';


const initialState = {
    listaDeProdutos: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADICIONAR_PRODUTO:
            return {
                ...state,
                listaDeProdutos: [...state.listaDeProdutos, action.payload],
            };
        case REMOVER_PRODUTO:
            return {
                ...state,
                listaDeProdutos: [...state.listaDeProdutos, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
