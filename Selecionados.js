import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../views/Card';

const Selecionados = () => {
    const listaDeProdutos = useSelector((state) => state.listaDeProdutos);

    return (
        <div className="container">
            <h1>Produtos Selecionados</h1>
            <div className="row">
                {listaDeProdutos.map((produto) => (  
                    <div className="col-md-4" key={produto.id}>
                        <Card
                            title={produto.nome} 
                            description={`Preço: R$ ${produto.preco.toFixed(2)}, Validade: ${produto.validade}`} 
                            image={produto.imagemUrl} 
                            onButtonClick={() => console.log(`Ação para ${produto.nome}`)} 
                            buttonText="Remover" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selecionados;