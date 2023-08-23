import React from 'react';

import addButton from '../../img/button/add.svg';

export const AddFinance = ({ onClickAddFinance }) => {
  const [finance, setFinance] = React.useState('');
  const inputRef = React.useRef();

  const onSubmitAddFinance = (event) => {
    event.preventDefault();

    if (!finance) {
      return;
    }

    onClickAddFinance(finance);
    setFinance('');
    inputRef.current.focus();
  };

  return (
    <div className="finance">
      <h1 className="finance__title title">What's with your finances today?</h1>
      <form className="form" onClick={onSubmitAddFinance}>
        <input
          className="form__inpit"
          ref={inputRef}
          type="text"
          placeholder="What operation do you want to add?"
          value={finance}
          onChange={(event) => setFinance(event.target.value)}
        />
        <button className="form__button">
          <img src={addButton} alt="Add" />
        </button>
      </form>
    </div>
  );
};
