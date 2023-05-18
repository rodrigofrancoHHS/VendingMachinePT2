import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HelloPage({ items, setItems }) {
  const [selectedItem, setSelectedItem] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateItem = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === selectedItem.name ? { ...item, ...selectedItem } : item
      )
    );
    localStorage.setItem('selectedItem', JSON.stringify(selectedItem));
  };

  useEffect(() => {
    const storedSelectedItem = localStorage.getItem('selectedItem');
    if (storedSelectedItem) {
      setSelectedItem(JSON.parse(storedSelectedItem));
    }
  }, []); // O array vazio [] indica que este useEffect será executado apenas uma vez, ao inicializar a página.

  return (
    <div>
      <h1>HelloPage</h1>
      <form>
        <select name="name" onChange={handleInputChange} value={selectedItem.name}>
          <option value="">Select Item</option>
          {items.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <br />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={selectedItem.price || ''}
          onChange={handleInputChange}
        />
        <br />
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={selectedItem.quantity || ''}
          onChange={handleInputChange}
        />
        <br />
        <button type="button" onClick={handleUpdateItem}>
          Update Item
        </button>
        <br />
        <br />
        <br />
        <br />

        <Link to="/">Voltar</Link>
      </form>
    </div>
  );
}

export default HelloPage;
