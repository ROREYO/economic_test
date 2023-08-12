import React from 'react';

import './styles.scss';

export const Total = () => {
  return (
    <div className="total">
      <div className="total__wrapper">
        <div className="total__summ">
          Income:
          <div className="plus">0</div>$
        </div>
        <div className="total__summ">
          Expenditure:
          <div className="minus">0</div>$
        </div>
        <div className="total__summ">
          Total:
          <div className="plus">0</div>$
        </div>
      </div>
    </div>
  );
};
