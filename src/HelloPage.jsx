import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import ChartExample from './tabela';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function HelloPage() {
  const storedItems = localStorage.getItem('updatedItems');
  const initialItems = storedItems
    ? JSON.parse(storedItems)
    : [
      { name: 'Coca-cola', price: 1.20, quantity: 10, sold: 0},
      { name: 'Sprite', price: 0.80, quantity: 5, sold: 0},
      { name: 'Ice-Tea', price: 1.20, quantity: 15, sold: 0},
      { name: 'Pepsi', price: 0.85, quantity: 14, sold: 0},
      { name: 'Bongo', price: 0.99, quantity: 9, sold: 0},
      { name: 'Monster', price: 1.40, quantity: 20, sold: 0},
      { name: 'Guaraná', price: 1.00, quantity: 10, sold: 0},
      { name: 'Sumol', price: 1.10, quantity: 1, sold: 0},
      { name: 'Chá', price: 1.25, quantity: 4, sold: 0},
      { name: 'Água', price: 1.30, quantity: 16, sold: 0},
      { name: '7UP', price: 0.85, quantity: 17, sold: 0},
      { name: 'Café', price: 0.80, quantity: 20, sold: 0}
      ];
  const [items, setItems] = useState(initialItems);

  const renameItem = (index) => { // cria uma constante que irá rever todos os produtos um por um
    const newPriceInput = document.getElementById(`newPriceInput_${index}`);
    const newPrice = newPriceInput.value;
    const newQuantityInput = document.getElementById(`newQuantityInput_${index}`);
    const newQuantity = newQuantityInput.value;

    


    if (newPrice !== '' && newQuantity !== '') { //faz a verificação se os números do novo preço e nova quantidade estão vazios
      const updatedItems = items.map((item, i) => { // vai buscar todos os valores dos items por index, ou seja um por um
        if (i === index) { // verifica  se o indice presente é igual ao selecionado nos inputs acima
          return { // retorna o item e as suas novas props
            ...item,
            price: parseFloat(newPrice),
            quantity: parseInt(newQuantity),
          };
        }
        return item;
      });

      setItems(updatedItems); // atualiza o estado do produto
      localStorage.setItem('updatedItems', JSON.stringify(updatedItems)); // adiciona á localstorage
    }
  };

  const columnDefs = [
    { field: 'name' },
    { field: 'price' },
    { field: 'quantity' },
    { field: 'sold' },
  ];


  return (
    <div>
      <Link to={'/'} className='config'>
        <button className='config'>Voltar ao Início</button>
      </Link>

      <br/><br/><br/><br/><br/><br/>

      {items.map((item, index) => (
        <div className="item-container" key={index}>
          <label className="item-name">Item: {item.name}</label>
          <label className="item-name">Preço: {item.price}</label>
          <input className="new-price-input" type="text" id={`newPriceInput_${index}`} placeholder="Insira o Novo Preço" />
          <input className="new-quantity-input" type="text" id={`newQuantityInput_${index}`} placeholder="Insira a Nova Quantidade" />
          <label className="item-quantity">Quantidade: {item.quantity}</label>
          <button className="rename-button" onClick={() => renameItem(index)}>Submeter</button>
        </div>
      ))}

      <br/><br/><br/><br/><br/><br/>

      <div className='ag-theme-alpine' style={{ height: 500 }}>
        <AgGridReact
          rowData={items}
          columnDefs={columnDefs}
        />
      </div>

      <br/><br/><br/><br/><br/><br/>

     
      <ChartExample/>
    </div>
  );
}

export default HelloPage;