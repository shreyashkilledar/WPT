<HTML>
    <head>
     <title>
        Currency Converter
     </title>
    </head>
    <body>
       <h1>Currency Converter</h1>
       <p> Select Currency and enter Amount to convert.</p>
       <form>
          <label>From:</label>
          <select id="from">
             <option value="USD">USD</option>
             <option value="EUR">EUR</option>
             <option value="GBP">GBP</option>
             <option value="INR">INR</option>
          </select>
          <label>To:</label>
          <select id="to">
             <option value="USD">USD</option>
             <option value="EUR">EUR</option>
             <option value="GBP">GBP</option>
             <option value="INR">INR</option>
          </select>
          <label>Amount:</label>
          <input type="text" id="amount" />
          <button type="button" id="convert">Convert</button>
          <p id="result"></p>
       </form>
       <script>
          const convert = document.getElementById("convert");
          const result = document.getElementById("result");
          const from = document.getElementById("from");
          const to = document.getElementById("to");
          const amount = document.getElementById("amount");
          convert.addEventListener("click", function() {
             let fromCurrency = from.value;
             let toCurrency = to.value;
             let amt = amount.value;
             fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
             .then(response => {
                   return response.json();
             })
             .then(data => {
                let rate = data.rates[toCurrency];
                let total = rate * amt;
                result.innerHTML = `${amt} ${fromCurrency} = ${total}
                ${toCurrency}`;
             });
          });
       </script>
    </body>
    </html>