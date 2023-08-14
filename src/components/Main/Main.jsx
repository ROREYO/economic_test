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
  const [categories, setCategories] = React.useState([]);
  const [finances, setFinances] = React.useState([]);

  const onClickAddCaregory = (categoryValue) => {
    setCategories([...categories, { id: uuidv4(), category: categoryValue }]);
  };
  const onClickDeleteCategory = (id) => {
    setCategories(categories.filter((caregory) => caregory.id !== id));
  };

  const onClickAddFinance = (financesValue) => {
    if (categories.length === 0) {
      alert('Add a category first!');
      return;
    }
    setFinances([...finances, { id: uuidv4(), finances: financesValue }]);
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
          {finances.map((finances, id) => (
            <EditFinance financesName={finances} key={id} categories={categories} />
          ))}
          {finances.length === 0 ? <NoData text="finances" /> : <Total />}
          {/* <Finances /> */}
        </div>
      </div>
    </div>
  );
};
