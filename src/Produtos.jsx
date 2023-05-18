import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { type } from '@testing-library/user-event/dist/type';

const Produtos = (props) => {

  const [selectedItems, setSelectedItems] = useState([]);
  const FaltaPagar = props.total - props.intro;
  const troco = FaltaPagar * -1;

  useEffect(() => {
    console.log("Produtos props",props)
    debugger
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

          // Armazenar o item selecionado no localStorage
          localStorage.setItem(moment().format('MMMM Do YYYY, h:mm:ss a'), JSON.stringify([...selectedItems, item]));

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

  const handleCheckout = () => {
    const quantityToRemove = {}; // Objeto para armazenar a quantidade de cada item selecionado
  
    // Contar a quantidade de cada item selecionado
    selectedItems.forEach((item) => {
      if (quantityToRemove[item.name]) { // Se a propriedade já existe, significa que esse item já foi contabilizado anteriormente. 
        quantityToRemove[item.name] += 1; //  incrementamos a quantidade em 1, somando 1 ao valor da propriedade 
      } else { // Se a propriedade ainda não existe no objeto quantityToRemove, significa que esse é o primeiro item desse tipo encontrado.
        quantityToRemove[item.name] = 1; // criamos a propriedade e atribuímos o valor 1
      }
    });
  
    // Atualizar a quantidade dos itens selecionados
    Object.keys(quantityToRemove).forEach((itemName) => {
      const quantity = quantityToRemove[itemName];
      props.setItems((prevItems) =>
        prevItems.map((item) => {
          if (item.name === itemName) {
            return { ...item, quantity: item.quantity - quantity };
          }
          return item;
        })
      );
    });
  
    // Reseta a lista de itens selecionados
    setSelectedItems([]);
  
    alert('Compra finalizada!');
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
  
    alert('Compra cancelada!');
  });

  };
  

  return (

    <div>
      <h2>Máquina de Venda</h2>
      <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.items.map((item) => (
          <div key={item.name} style={{ flexBasis: 'calc(33.33% - 20px)', marginBottom: '20px', marginRight: '20px' }}>
          <p>{item.name}</p>
          <p>Preço: € { parseFloat(item.price).toFixed(2)}</p>
          <p>Quantidade: {item.quantity}</p>
          <button onClick={() => handleItemSelection(item)}>Comprar</button>
        </div>
      ))}
    </div>
  </div>

  <br/><br/><br/><br/><br/>

  {/* botão para finalizar a compra */}
  {selectedItems.length > 0 && (
    <div>
      <h3>Itens selecionados:</h3>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.name}>{item.name} - € {parseFloat(item.price).toFixed(2)}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Finalizar compra</button>
      <button onClick={cancelarCompra}>Cancelar</button>
    </div>
  )}

    </div>
  );
}

export default Produtos;  