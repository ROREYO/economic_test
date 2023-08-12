import React from 'react';

import addButton from '../img/addButton.svg';
import './styles.scss';

export const AddCategory = () => {
  return (
    <div className="category">
      <h1 className="category__title title">Financial categories</h1>
      <form className="form">
        <input
          className="form__inpit"
          type="text"
          placeholder="Which category do you want to add?"
        />
        <button className="form__button">
          <img src={addButton} alt="Add" />
        </button>
      </form>
    </div>
  );
};
