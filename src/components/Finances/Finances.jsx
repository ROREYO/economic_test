import React from 'react';

import EditSvg from '../img/edit.svg';
import DeleteSvg from '../img/delete.svg';

import './styles.scss';

export const Finances = () => {
  return (
    <div className="finances">
      <div className="finances__wrapper">
        <div className="finances__text">Buy vegetables</div>
        <div className="finances__category">Category</div>
        <div className="finances__value">
          <div className="value__date">02.11.1998</div>
          <div className="value__money">-100.50 $</div>
        </div>
        <div className="finances__note">Cucumber, tomato, onion, garlic, buryak</div>
      </div>
      <div className="finances__buttons buttons">
        <button className="button">
          <img src={EditSvg} alt="Edit" />
        </button>
        <button className="button">
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};
