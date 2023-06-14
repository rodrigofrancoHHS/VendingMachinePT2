import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import ChartExample from './tabela';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function HelloPage() {
  const [items, setItems] = useState([]);
  
  const apiUrl = 'https://localhost:7136';
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/TodosProdutos/ListadeProdutos`);
        const produtosCarregados = await response.json();
  
        setItems(produtosCarregados);
      } catch (error) {
        console.error('Erro ao obter os produtos da API:', error);
      }
    };
  
    fetchProducts();
  }, []);


  const renameItem = async (index) => {
    const newPriceInput = document.getElementById(`newPriceInput_${index}`);
    const newPrice = newPriceInput.value;
    const newQuantityInput = document.getElementById(`newQuantityInput_${index}`);
    const newQuantity = newQuantityInput.value;
  
    if (newPrice !== '' && newQuantity !== '') {
      const updatedItems = items.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            price: parseFloat(newPrice),
            quantity: parseInt(newQuantity),
          };
        }
        return item;
      });
  
      setItems(updatedItems);

  
      try {
        const response = await fetch(`${apiUrl}/api/TodosProdutos/InserirAtualizarProdutos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedItems),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          setItems(responseData);

          //Limpar as caixas de texto
          newPriceInput.value = '';
          newQuantityInput.value = '';
        } else {
          console.error('Erro ao atualizar os produtos na API');
        }
      } catch (error) {
        console.error('Erro ao conectar-se com a API:', error);
      }
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