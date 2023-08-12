import React from 'react';

import addButton from '../img/addButton.svg';
import './styles.scss';

export const AddFinance = () => {
  return (
    <div className="finance">
      <h1 className="finance__title title">What's with your finances today?</h1>
      <form className="form">
        <input
          className="form__inpit"
          type="text"
          placeholder="What operation do you want to add?"
        />
        <button className="form__button">
          <img src={addButton} alt="Add" />
        </button>
      </form>
    </div>
  );
};
