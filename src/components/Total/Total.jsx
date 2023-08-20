import React from 'react';

import './styles.scss';

export const Total = ({ finances }) => {
  const getSum = (action) => {
    let getAction = finances.filter((finance) => finance.action === action);
    let getSum = getAction.map((action) => action.sum).reduce((a, b) => a + b, 0);

    return getSum;
  };

  const sumIncome = getSum('Income');
  const sumExpenditure = getSum('Expenditure');
  const sumTotal = sumIncome - sumExpenditure;

  return (
    <div className="total">
      <div className="total__wrapper">
        <div className="total__summ">
          Income:
          <div className="plus">{sumIncome}</div>$
        </div>
        <div className="total__summ">
          Expenditure:
          <div className="minus">{sumExpenditure}</div>$
        </div>
        <div className="total__summ">
          Total:
          <div className={sumTotal > 0 ? 'plus' : 'minus'}>{sumTotal}</div>$
        </div>
      </div>
    </div>
  );
};
