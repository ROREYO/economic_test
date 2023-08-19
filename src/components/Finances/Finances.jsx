import React from 'react';

import EditSvg from '../img/edit.svg';
import DeleteSvg from '../img/delete.svg';

import './styles.scss';

export const Finances = ({ financesName, onClickEditFinance, onClickDeleteFinance }) => {
  const { finances, category, date, sum, note } = financesName;

  console.log(financesName);
  return (
    <div className="finances">
      <div className="finances__wrapper">
        <div className="finances__text">{finances}</div>
        <div className="finances__category">{category}</div>
        <div className="finances__value">
          <input className="value__date" type="date" value={date} disabled />
          <div className="value__money">{`${sum} $`}</div>
        </div>
        <div className="finances__note">{note}</div>
      </div>
      <div className="finances__buttons buttons">
        <button className="button" onClick={() => onClickEditFinance(financesName.id)}>
          <img src={EditSvg} alt="Edit" />
        </button>
        <button className="button" onClick={() => onClickDeleteFinance(financesName.id)}>
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};
