import React, { useEffect, useState } from 'react';

const Produtos = (props) => {

  const [selectedItems, setSelectedItems] = useState([]);
  const FaltaPagar = props.total - props.intro;
  const troco = FaltaPagar * -1;

  useEffect(() => {
    console.log("Produtos props",props)
  },[])

  const handleItemSelection = (item) => {
    if (item.quantity > 0) {
      // Verifica se a quantidade do item é maior que zero
      const maxQuantity = item.quantity; // Quantidade máxima disponível para o item
      const selectedItemCount = selectedItems.filter((selectedItem) => selectedItem.name === item.name).length;
      // Conta quantos itens desse tipo já foram selecionados
  
      if (selectedItemCount < maxQuantity) {
        // Verifica se a quantidade selecionada ainda é menor que a quantidade máxima
        if (troco >= item.price) {
          props.setTotal(props.total + item.price);
          setSelectedItems([...selectedItems, item]); // adiciona o item aos selecionados
          alert(`Você comprou ${item.name}!`);

        } else {
          alert(`Valor insuficiente para comprar ${item.name}!`);
        }
      } else {
        alert(`Quantidade máxima de ${item.name} atingida!`);
      }
    } else {
      alert('Saldo insuficiente ou item fora de estoque!');
    }
  };  

  
  
  
  const handleCheckout = async () => {
    try {
      const apiUrl = 'https://localhost:7136';
      const response = await fetch(`${apiUrl}/api/TodosProdutos/Checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedItems),
      });

      
  
      if (response.ok) {
        const updatedItems = await response.json();
        props.setItems(updatedItems);
        setSelectedItems([]);
        alert('Compra finalizada!');
      } else {
        console.error('Erro ao realizar o checkout:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao conectar-se com a API:', error);
    }
  };


  

    
  
  const cancelarCompra = () => {
    const quantityToAdd = {}; // Objeto para armazenar a quantidade de cada item selecionado
    
    // Contar a quantidade de cada item selecionado
    selectedItems.forEach((item) => {
      if (quantityToAdd[item.name]) {
        quantityToAdd[item.name] += 1;
      } else {
        quantityToAdd[item.name] = 1;
      }
  
    // Atualizar a quantidade dos itens selecionados
    const quantityToRemove = selectedItems.filter((selectedItem) => selectedItem.name === item.name).length;
      const valueToRemove = item.price * quantityToRemove;  

      props.setTotal((prevTotal) => { 
        var result = prevTotal - valueToRemove

        return result < 0 ? 0 : result;
      });
      
    // Reseta a lista de itens selecionados
    setSelectedItems([]);

    localStorage.clear();
  
    alert('Compra cancelada!');
  });

  };
  

  return (

    <div>

<div className="flex flex-col items-center justify-center">
  <h2 className="text-4xl font-bold mb-8">Máquina de Venda</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
    {props.items.map((item) => (
      <div key={item.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
        <p className="text-gray-600 mb-2">Preço:  {parseFloat(item.price).toFixed(2)} €</p>
        <p className="text-gray-600 mb-4">Quantidade: {item.quantity}</p>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => handleItemSelection(item)}
        >
          Comprar
        </button>
      </div>
    ))}
  </div>
</div>

  {/* botão para finalizar a compra */}
  {selectedItems.length > 0 && (
    <div className="flex flex-col items-center justify-center">
    <div className="p-4 mt-0">
      <h3 className="text-lg font-semibold mb-2">Itens selecionados:</h3>
      <ul className="list-disc pl-6 mb-2">
        {selectedItems.map((item) => (
          <li key={item.name}>{item.name} - € {parseFloat(item.price).toFixed(2)}</li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleCheckout}>Finalizar compra</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={cancelarCompra}>Cancelar</button>
    </div>
  </div>
  )}

    </div>
  );
}

export default Produtos;  