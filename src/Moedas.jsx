import moment from 'moment';
import React, { useEffect } from 'react';

const Moedas = (props) => {

  useEffect(() => {
    console.log("Moedas props",props)
  },[props])


  

  const handleMoedasSelection = (moeda) => {
    if (props.quantidade >= 0) {
      props.setIntro(props.intro + moeda.price);
      localStorage.setItem(moment().format('MMMM Do YYYY, h:mm:ss a'), JSON.stringify(moeda));
      props.setQuantidade(props.quantidade + 1);
      const index = props.moedas.findIndex((m) => m.name === moeda.name);
      props.setMoedas((prevState) => [      ...prevState.slice(0, index),      { ...prevState[index], quantity: prevState[index].quantity + 1 },
        ...prevState.slice(index + 1),
      ]);
    } else {
      alert('Saldo insuficiente ou item fora de estoque!');
    }
  };

  const FaltaPagar = props.total - props.intro;

  return (

    
    <div>
    <div>
        {props.moedas.map((moeda) => (
          <div key={moeda.name}>
            <p>Moedas: € {moeda.price.toFixed(2)} &nbsp;&nbsp;  <button onClick={() => handleMoedasSelection(moeda) }>Inserir</button></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Moedas;