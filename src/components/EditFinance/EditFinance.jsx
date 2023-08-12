import React from 'react';

import DoneSvg from '../img/done.svg';

import './styles.scss';

export const EditFinance = () => {
  return (
    <div className="edit_finances">
      <div className="edit_finances__wrapper">
        <input className="edit_finances__text" type="text" value="Buy vegetables" />
        <select className="edit_finances__category">
          <option>Category1</option>
          <option>Category2</option>
        </select>
        <div className="edit_finances__value">
          <input className="value__date" type="date" />
          <input className="value__money" type="text" value={`-100.50 $`} />
        </div>
        <input className="edit_finances__note" value="Cucumber, tomato, onion, garlic, buryak" />
      </div>
      <div className="edit_finances__buttons buttons">
        <button className="button">
          <img src={DoneSvg} alt="Done" />
        </button>
      </div>
    </div>
  );
};
