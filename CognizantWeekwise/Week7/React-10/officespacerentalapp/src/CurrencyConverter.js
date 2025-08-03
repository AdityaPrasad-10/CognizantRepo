import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currency.toLowerCase() === 'euro') {
      const converted = parseFloat(amount) * 80; // Assuming 1 Euro = 80 INR
      alert(`Converting to ${currency} Amount is ${converted}`);
    } else {
      alert("Currency not supported");
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Currency: </label>
          <textarea
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
