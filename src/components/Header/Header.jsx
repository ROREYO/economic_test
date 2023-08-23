import React from 'react';
import axios from 'axios';

import './styles.scss';

export const Header = () => {
  const [currencies, setCurrencies] = React.useState(0);

  React.useEffect(() => {
    const key = '709a828f3a30f0b8deec6faeddb745aa';
    const symbols = 'USD, GBP, JPY, RUB';

    async function fetchCurrencies() {
      try {
        const { data } = await axios.get(
          `http://data.fixer.io/api/latest?access_key=${key}&symbols=${symbols}`,
        );
        setCurrencies(data.rates);
      } catch (error) {
        console.log(error);
        alert('Error when receiving currencies');
      }
    }
    fetchCurrencies();
  }, []);

  const getCurrency = (valueCurrency, symbols) => {
    const currency = currencies[valueCurrency].toFixed(2);

    return currency + ' ' + symbols;
  };

  return (
    <header className="header">
      <div className="header__currencies">
        <div className="header__currencies--text">Exchange rate to euro:</div>
        {currencies ? (
          <>
            <div className="header__currencies--value">{getCurrency('USD', '$')}</div>
            <div className="header__currencies--value">{getCurrency('GBP', '£')}</div>
            <div className="header__currencies--value">{getCurrency('JPY', '¥')}</div>
            <div className="header__currencies--value">{getCurrency('RUB', '₽')}</div>
          </>
        ) : (
          <div className="header__currencies--value">{'Loading currencies...'}</div>
        )}
      </div>
    </header>
  );
};
