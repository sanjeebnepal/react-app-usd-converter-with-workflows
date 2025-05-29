import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const convertCurrency = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
      const data = await response.json();

      if (data && data.conversion_rates[currency]) {
        const rate = data.conversion_rates[currency];
        const converted = (amount * rate).toFixed(2);
        setResult(`${amount} USD = ${converted} ${currency}`);
      } else {
        setResult("Currency not supported.");
      }
    } catch (error) {
      setResult("Error fetching exchange rates.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>💱 Currency Converter</h2>
      <input
        type="number"
        placeholder="Amount in USD"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <button onClick={convertCurrency}>Convert</button>
      <div style={{ marginTop: "1rem", fontWeight: "bold" }}>{result}</div>
    </div>
  );
}

export default App;
