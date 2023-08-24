import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddCategory } from '../AddCategory/AddCategory';
import { AddFinance } from '../AddFinance/AddFinance';
import { NoData } from '../NoData/NoData';
import { EditFinance } from '../EditFinance/EditFinance';
import { Categories } from '../Categories/Categories';
import { Finances } from '../Finances/Finances';
import { Total } from '../Total/Total';

import './styles.scss';
uuidv4();

export const Main = () => {
  const getJsonCategories = JSON.parse(localStorage.getItem('categories'));
  const getJsonFinances = JSON.parse(localStorage.getItem('finances'));
  const isMountedCategories = React.useRef(false);
  const isMountedFinances = React.useRef(false);

  const [categories, setCategories] = React.useState(getJsonCategories || []);
  const [finances, setFinances] = React.useState(getJsonFinances || []);

  React.useEffect(() => {
    if (isMountedCategories.current) {
      const json = JSON.stringify(categories);
      localStorage.setItem('categories', json);
    }

    isMountedCategories.current = true;
  }, [categories]);
  React.useEffect(() => {
    if (isMountedFinances.current) {
      const json = JSON.stringify(finances);
      localStorage.setItem('finances', json);
    }

    isMountedFinances.current = true;
  }, [finances]);

  const onClickAddCaregory = (category) => {
    let getCategoryFromCategories = categories.map(
      (categories) => categories.category === category,
    );

    if (Boolean(...getCategoryFromCategories)) {
      alert('This category already exists');
      return;
    }

    setCategories([...categories, { id: uuidv4(), category: category }]);
  };
  const onClickDeleteCategory = (category, id) => {
    let getCategoryFromFinanse = finances.map((finance) => finance.category === category);

    if (Boolean(...getCategoryFromFinanse)) {
      alert('This category is related to finance. First delete or edit the finance');
      return;
    }

    setCategories(categories.filter((caregory) => caregory.id !== id));
  };

  const onClickAddFinance = (financesValue) => {
    if (categories.length === 0) {
      alert('Add a category first!');
      return;
    }
    setFinances([...finances, { id: uuidv4(), finances: financesValue, isEditing: false }]);
  };
  const onClickEditFinance = (id) => {
    setFinances(
      finances.map((finance) =>
        finance.id === id ? { ...finance, isEditing: !finance.isEditing } : finance,
      ),
    );
  };
  const onClickConfirmFinance = (
    id,
    nameFinance,
    categoryFinance,
    dateFinance,
    actionFinance,
    sumFinance,
    noteFinance,
  ) => {
    setFinances(
      finances.map((finance) =>
        finance.id === id
          ? {
              ...finance,
              isEditing: !finance.isEditing,
              finances: nameFinance,
              category: categoryFinance,
              date: dateFinance,
              action: actionFinance,
              sum: sumFinance,
              note: noteFinance,
            }
          : finance,
      ),
    );
  };
  const onClickDeleteFinance = (id) => {
    setFinances(finances.filter((finance) => finance.id !== id));
  };

  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__categories border">
          <AddCategory onClickAddCaregory={onClickAddCaregory} />
          {categories.length === 0 && <NoData text="categories" />}
          {categories.map((category, id) => (
            <Categories
              categoryName={category}
              key={id}
              onClickDeleteCategory={onClickDeleteCategory}
            />
          ))}
        </div>
        <div className="main__finance border">
          <AddFinance onClickAddFinance={onClickAddFinance} />
          {finances.map((finances, id) =>
            finances.isEditing ? (
              <Finances
                key={id}
                financesName={finances}
                onClickEditFinance={onClickEditFinance}
                onClickDeleteFinance={onClickDeleteFinance}
              />
            ) : (
              <EditFinance
                key={id}
                financesName={finances}
                categories={categories}
                onClickConfirmFinance={onClickConfirmFinance}
              />
            ),
          )}
          {finances.length === 0 ? <NoData text="finances" /> : <Total finances={finances} />}
        </div>
      </div>
    </div>
  );
};
