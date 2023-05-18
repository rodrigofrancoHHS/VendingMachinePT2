import React, { useState } from 'react';
import Produtos from './Produtos';
import Moedas from './Moedas';
import moment from 'moment';
import { Link, Route, Router, Routes } from 'react-router-dom';
import HelloPage from './HelloPage';


function VendingMachine() {

  const [quantidade, setQuantidade] = useState(0);
  const [total, setTotal] = useState(0);
  const [intro, setIntro] = useState(0);    
  const [moedas, setMoedas] = useState([
    { name: '1 cêntimo', price: 0.01},
    { name: '2 cêntimos', price: 0.02},
    { name: '5 cêntimos', price: 0.05},
    { name: '10 cêntimos', price: 0.10},
    { name: '20 cêntimos', price: 0.20},
    { name: '50 cêntimos', price: 0.50},
    { name: '1 euro', price: 1.00},
    { name: '2 euros', price: 2.00}
  ]);
  const [items, setItems] = useState([
    { name: 'Coca-cola', price: 1.20, quantity: 10 },
    { name: 'Sprite', price: 0.80, quantity: 5 },
    { name: 'Ice-Tea', price: 1.20, quantity: 15 },
    { name: 'Pepsi', price: 0.85, quantity: 14 },
    { name: 'Bongo', price: 0.99, quantity: 9 },
    { name: 'Monster', price: 1.40, quantity: 20 },
    { name: 'Guaraná', price: 1.00, quantity: 10 },
    { name: 'Sumol', price: 1.10, quantity: 1 },
    { name: 'Chá', price: 1.25, quantity: 4 },
    { name: 'Água', price: 1.30, quantity: 16 },
    { name: '7UP', price: 0.85, quantity: 17 },
    { name: 'Café', price: 0.80, quantity: 20 }
  ]);
  const FaltaPagar = total - intro;
  const troco = FaltaPagar * -1;

  const [showModal, setShowModal] = useState(false);
  const [compras, setCompras] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTrocoSelection = () => {

    const novaCompra = {
      moedas: moedas,
      items: items,
      troco: troco.toFixed(2)
    };

     setCompras(prevCompras => [...prevCompras, novaCompra]);

      localStorage.setItem(moment().format('MMMM Do YYYY, h:mm:ss a'), JSON.stringify(troco));
      setIntro(0);
      setTotal(0);
      setQuantidade(0);
  };

  let keys = [];
  let values = [];
  for (let i = 0; i < localStorage.length; i++){
  keys.push(localStorage.key(i));
}
  for (let i = 0; i < keys.length; i++){
  let key = keys[i];
  let value = localStorage.getItem(key);
  values.push(value);
}

  return (

    <div>

      <Link to={'/HelloPage/'} className='config'>
        <button className='config'>Config</button>
      </Link>

          <HelloPage items={items} setItems={setItems} /> 
          <Produtos items={items} setItems={setItems} total={total} setTotal={setTotal} intro={intro} setIntro={setIntro} />
          <Moedas moedas = {moedas} setMoedas = {setMoedas} total={total} setTotal = {setTotal} intro = {intro} setIntro = {setIntro} quantidade = {quantidade} setQuantidade = {setQuantidade}/>

      <div>
        <br/><br/>
        <p>Valor a Pagar: <label>{parseFloat(total).toFixed(2)} €</label></p>
        <p>Valor introduzido até agora:   <label>{parseFloat(intro).toFixed(2)} €</label></p>
        <p>Troco:   <label>{parseFloat(troco).toFixed(2)} € &nbsp;&nbsp;&nbsp; <button onClick={handleTrocoSelection}>Terminar Compra</button></label></p>
      </div>

      <div>
      <button onClick={openModal}>Abrir Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Valores armazenados</h2>
            <button onClick={closeModal}>Fechar</button>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Chave</th>
                    <th>Valores</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(localStorage).map((key) => {
                    const value = JSON.parse(localStorage.getItem(key));
                    if (Array.isArray(value)) {
                      return (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>
                            <ul>
                              {value.map((item, index) => (
                                <li key={index}>{item.name}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      );
                    } else if (typeof value === 'number') {
                      return (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{value.toFixed(2)}</td>
                        </tr>
                      );
                    } else if (typeof value === 'object' && !Array.isArray(value)) {
                      return (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{parseFloat(value.price).toFixed(2)}</td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default VendingMachine;