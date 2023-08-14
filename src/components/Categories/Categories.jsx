import React from 'react';

import DeleteSvg from '../img/delete.svg';

import './styles.scss';

export const Categories = ({ categoryName, onClickDeleteCategory }) => {
  return (
    <div className="categories">
      <div className="categories__text">{categoryName.category}</div>
      <div className="categories__buttons buttons">
        <button className="button" onClick={() => onClickDeleteCategory(categoryName.id)}>
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};
