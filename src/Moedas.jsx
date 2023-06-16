import moment from 'moment';
import React, { useEffect } from 'react';

const Moedas = (props) => {

  useEffect(() => {
    console.log("Moedas props",props)
  },[props])


  

  const handleMoedasSelection = (moeda) => {
    if (props.quantidade >= 0) {
      props.setIntro(props.intro + moeda.price);
      localStorage.setItem(moment().format('Colocou: MMMM Do YYYY, h:mm:ss a'), JSON.stringify(moeda));
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

    
    <div className="flex justify-center mt-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    {props.moedas.map((moeda) => (
      <div key={moeda.name} className="bg-gray-100 p-3 rounded">
        <p className="text-base mb-2">Moedas:  {moeda.price.toFixed(2)} €</p>
        <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={() => handleMoedasSelection(moeda)}>Inserir</button>
      </div>
    ))}
  </div>
</div>
  );
}

export default Moedas;