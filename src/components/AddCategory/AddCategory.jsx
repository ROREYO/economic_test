import React from 'react';

import addButton from '../img/addButton.svg';
import './styles.scss';

export const AddCategory = ({ onClickAddCaregory }) => {
  const [category, setCategory] = React.useState('');
  const inputRef = React.useRef();

  const onSubmitAddCategory = (event) => {
    event.preventDefault();

    if (!category) {
      return;
    }

    onClickAddCaregory(category);
    setCategory('');
    inputRef.current.focus();
  };

  return (
    <div className="category">
      <h1 className="category__title title">Financial categories</h1>
      <form className="form" onSubmit={onSubmitAddCategory}>
        <input
          className="form__inpit"
          ref={inputRef}
          type="text"
          placeholder="Which category do you want to add?"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button className="form__button">
          <img src={addButton} alt="Add" />
        </button>
      </form>
    </div>
  );
};
