import React, { useEffect } from 'react';

const Produtos = (props) => {

  useEffect(() => {
    console.log("Produtos props",props)
    debugger
  },[])
  

  const handleItemSelection = (item) => {
    if (item.quantity > 0) {
      props.setTotal(props.total + item.price);
      localStorage.setItem('item:', JSON.stringify(item));
      props.setItems(
        props.items.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
      alert(`Você comprou ${item.name}!`);
    } else {
      alert('Saldo insuficiente ou item fora de estoque!');
    }
  };

  return (

    <div>
      <h2>Máquina de Venda</h2>
      <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.items.map((item) => (
          <div key={item.name} style={{ flexBasis: 'calc(33.33% - 20px)', marginBottom: '20px', marginRight: '20px' }}>
          <p>{item.name}</p>
          <p>Preço: € {item.price.toFixed(2)}</p>
          <p>Quantidade: {item.quantity}</p>
          <button onClick={() => handleItemSelection(item)}>Comprar</button>
        </div>
      ))}
    </div>
  </div>

  <br/><br/><br/><br/><br/>
    </div>
  );
}

export default Produtos;