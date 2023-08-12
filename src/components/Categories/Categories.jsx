import React from 'react';

import DeleteSvg from '../img/delete.svg';

import './styles.scss';

export const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__text">Categorie</div>
      <div className="categories__buttons buttons">
        <button className="button">
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};
