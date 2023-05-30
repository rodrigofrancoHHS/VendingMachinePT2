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

      <br/><br/>
      
      <Link to={'/'}>
      <div className='flex justify-center'>
        <h2 className="text-4xl font-bold mb-8">Máquina de Venda</h2>
      </div>
      </Link>

      <br/><br/>

      <div className="flex flex-wrap -mx-4">
  {items.map((item, index) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4" key={index}>
      <div className="bg-blue-600 p-4 rounded-md shadow-lg">
        <div className="flex justify-center">
          <label className="text-2xl text-white font-serif">{item.name}</label>
        </div>

        <br/>
        <div className='flex justify-center'>
          <label className="text-lg text-white font-semibold">Preço: {item.price} €</label><br/>
        </div>
        <input className="w-full px-4 py-2 mt-2 bg-gray-200 rounded" type="text" id={`newPriceInput_${index}`} placeholder="Insira o Novo Preço"/>
        <br/><br/>
        <div className='flex justify-center'>
          <label className="text-lg text-white font-semibold">Quantidade: {item.quantity}</label><br/>
        </div>
        <input className="w-full px-4 py-2 mt-2 bg-gray-200 rounded" type="text" id={`newQuantityInput_${index}`} placeholder="Insira a Nova Quantidade"/>
        <br/><br/>
        <div className='flex justify-center'>
          <button
            className="px-4 py-2 mt-2 bg-black hover:bg-black text-white font-semibold rounded"
            onClick={() => renameItem(index)}
          >
            Submeter
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


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