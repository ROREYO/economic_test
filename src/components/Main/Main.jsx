import React from 'react';

import { AddCategory } from '../AddCategory/AddCategory';
import { Categories } from '../Categories/Categories';
import { AddFinance } from '../AddFinance/AddFinance';
import { Finances } from '../Finances/Finances';
import { EditFinance } from '../EditFinance/EditFinance';
import { Total } from '../Total/Total';

import './styles.scss';

export const Main = () => {
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__categories border">
          <AddCategory />
          <Categories />
          <Categories />
        </div>
        <div className="main__finance border">
          <AddFinance />
          <Finances />
          <Finances />
          <EditFinance />
          <Total />
        </div>
      </div>
    </div>
  );
};
