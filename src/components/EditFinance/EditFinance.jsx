import React from 'react';

import DoneSvg from '../img/done.svg';

import './styles.scss';

export const EditFinance = ({ financesName, categories }) => {
  const [nameFinance, setNameFinance] = React.useState(financesName.finances);
  const [categoryFinance, setCategoryFinance] = React.useState('');
  const [dateFinance, setDateFinance] = React.useState('');
  const [sumFinance, setSumFinance] = React.useState('');
  const [noteFinance, setNoteFinance] = React.useState('');

  const inputRef = React.useRef();

  return (
    <div className="edit_finances">
      <div className="edit_finances__wrapper">
        <input
          className="edit_finances__text"
          type="text"
          value={nameFinance}
          onChange={(event) => setNameFinance(event.target.value)}
        />
        <select className="edit_finances__category">
          {categories.map((allCategories, index) => (
            <option key={index}>{allCategories.category}</option>
          ))}
        </select>
        <div className="edit_finances__value">
          <input
            ref={inputRef}
            className="value__date"
            type="date"
            value={dateFinance}
            onChange={(event) => setDateFinance(event.target.value)}
          />
          <input
            className="value__money"
            type="text"
            placeholder="+ or - and sum"
            value={sumFinance}
            onChange={(event) => setSumFinance(event.target.value)}
          />
        </div>
        <input
          className="edit_finances__note"
          placeholder="Your note"
          value={noteFinance}
          onChange={(event) => setNoteFinance(event.target.value)}
        />
      </div>
      <div className="edit_finances__buttons buttons">
        <button className="button">
          <img src={DoneSvg} alt="Done" />
        </button>
      </div>
    </div>
  );
};
