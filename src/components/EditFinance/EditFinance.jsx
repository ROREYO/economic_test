import React from 'react';

import DoneSvg from '../img/done.svg';

import './styles.scss';

export const EditFinance = ({ financesName, categories, onClickConfirmFinance }) => {
  const { finances, category, date, sum, note } = financesName;

  const [nameFinance, setNameFinance] = React.useState(finances);
  const [categoryFinance, setCategoryFinance] = React.useState(category || categories[0].category);
  const [dateFinance, setDateFinance] = React.useState(date || '');
  const [sumFinance, setSumFinance] = React.useState(sum || '');
  const [noteFinance, setNoteFinance] = React.useState(note || '');

  const [getCategory, setGetCategory] = React.useState(categories);
  const inputRef = React.useRef();

  React.useEffect(() => {
    setGetCategory(categories);
  }, [categories]);

  const onClickDoneEdit = () => {
    if (!dateFinance) {
      alert('Enter the date');
      return;
    }
    if (!sumFinance) {
      alert('Enter the amount');
      return;
    }

    onClickConfirmFinance(
      financesName.id,
      nameFinance,
      categoryFinance,
      dateFinance,
      sumFinance,
      noteFinance,
    );
  };

  return (
    <div className="edit_finances">
      <div className="edit_finances__wrapper">
        <input
          className="edit_finances__text"
          type="text"
          value={nameFinance}
          onChange={(event) => setNameFinance(event.target.value)}
        />
        <select
          className="edit_finances__category"
          onChange={(event) => setCategoryFinance(getCategory[event.target.value].category)}>
          {categories.map((allCategories, key) => (
            <option key={key} value={key} selected={category === allCategories.category}>
              {allCategories.category}
            </option>
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
        <button className="button" onClick={onClickDoneEdit}>
          <img src={DoneSvg} alt="Done" />
        </button>
      </div>
    </div>
  );
};
