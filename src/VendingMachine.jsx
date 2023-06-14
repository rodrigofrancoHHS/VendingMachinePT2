import React, { useState, useEffect } from 'react';
import Produtos from './Produtos';
import Moedas from './Moedas';
import moment from 'moment';
import { Link} from 'react-router-dom';


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

  
  /*Desta forma, quando a página for reiniciada, o código verificará se há itens armazenados no localStorage. Se houver, usará esses itens como valor inicial para o estado items.
  Caso contrário, usará os valores iniciais padrão. */  
  const [items, setItems] = useState([]);
  
  const apiUrl = 'https://localhost:7136';
  
  useEffect(() => {
    debugger;
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

      localStorage.setItem(moment().format('Troco: MMMM Do YYYY, h:mm:ss a'), JSON.stringify(troco));
      localStorage.setItem(moment().format('Tot: MMMM Do YYYY, h:mm:ss a'), JSON.stringify(total));
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




// Percorrer todos os itens no localStorage


let faturacao = 0;

// Exibir a faturação total
console.log(`Faturação Total: ${faturacao}`);

// Percorrer todos os itens no localStorage
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  // Verificar se o item é referente aos valores 'total'
  if (key.startsWith('Tot:')) {
    // Converter o valor JSON de volta para um objeto
    const totalObj = JSON.parse(value);

    // Somar o valor 'total' à faturação
    faturacao += parseFloat(totalObj);
  }
}


  return (

    <div>

<Link to={'/HelloPage/'}>
  <button className='config bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg border-4 border-purple-500 shadow-lg transform hover:scale-105 transition duration-300'>
    Configurar Items
  </button>
</Link>

          <Produtos items={items} setItems={setItems} total={total} setTotal={setTotal} intro={intro} setIntro={setIntro} />
          <br/>
          <Moedas moedas = {moedas} setMoedas = {setMoedas} total={total} setTotal = {setTotal} intro = {intro} setIntro = {setIntro} quantidade = {quantidade} setQuantidade = {setQuantidade}/>

          <div className="mt-8 bg-gray-100 p-4 rounded">
  <p className="mb-4 text-center">Valor a Pagar: <span className="font-bold">{parseFloat(total).toFixed(2)} €</span></p>
  <p className="mb-4 text-center">Valor introduzido até agora: <span className="font-bold">{parseFloat(intro).toFixed(2)} €</span></p>
  <p className="mb-2 text-center">Troco: <span className="font-bold">{parseFloat(troco).toFixed(2)} €</span></p>
  <br />
  <div className="flex justify-center">
    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={handleTrocoSelection}>Terminar Compra</button>
  </div>

  <br/>

  <div>
  <div className="flex justify-center">
    <button onClick={openModal} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Abrir Modal</button>
  </div>
  {showModal && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal bg-black p-8 rounded shadow-lg overflow-y-auto max-h-screen">
        <h2 className="text-2xl mb-4 text-white">Valores armazenados</h2>
        <h2 className="mb-4 text-white">Faturação Total: <span className="font-bold">{parseFloat(faturacao).toFixed(2)}</span></h2>
        <button onClick={closeModal} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Fechar</button>
        <div className="table-container mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-white">Chave</th>
                <th className="text-white">Valores</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(localStorage).map((key) => {
                const value = JSON.parse(localStorage.getItem(key));
                if (Array.isArray(value)) {
                  return (
                    <tr key={key}>
                      <td className="text-white">{key}</td>
                      <td className="text-white">
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
                      <td className="text-white">{key}</td>
                      <td className="text-white">{value.toFixed(2)}</td>
                    </tr>
                  );
                } else if (typeof value === 'object' && !Array.isArray(value)) {
                  return (
                    <tr key={key}>
                      <td className="text-white">{key}</td>
                      <td className="text-white">{parseFloat(value.price).toFixed(2)}</td>
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


    </div>
  );
}

export default VendingMachine;